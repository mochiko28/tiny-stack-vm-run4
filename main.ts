// Tiny stack VM for make.fun's ISA v1: runs /input/<id>/program.bin on input.bin, writes stdout.bin and exit.txt.
import { mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';

// Per opcode: immediate bytes, values popped, net stack change. Missing entries are unknown opcodes.
const SPEC: Record<number, [number, number, number]> = {
  0: [0, 0, 0], 1: [1, 0, 1], 2: [4, 0, 1], 3: [0, 1, -1], 4: [0, 1, 1], 5: [0, 2, 0], 6: [0, 2, 1], 7: [0, 3, 0],
  0x30: [2, 0, 0], 0x31: [2, 1, -1], 0x32: [2, 1, -1], 0x33: [2, 0, 0], 0x34: [0, 0, 0],
  0x40: [0, 1, 0], 0x41: [0, 2, -2], 0x50: [0, 1, -1], 0x51: [0, 1, -1], 0x52: [0, 0, 1], 0x53: [0, 1, -1],
};
for (let o = 0x10; o < 0x23; o++) if (o != 0x1f) SPEC[o] = o == 0x17 || o == 0x1b ? [0, 1, 0] : [0, 2, -1];

function run(p: Buffer, input: Buffer): [Buffer, number] {
  const D = new Int32Array(256), M = new Int32Array(256), C: number[] = [], out: number[] = [];
  let sp = 0, pc = 0, ip = 0;
  for (let steps = 0; ; steps++) {
    const done = (code: number): [Buffer, number] => [Buffer.from(out), code];
    if (steps == 1e6) return done(10);
    if (pc < 0 || pc >= p.length) return done(9);
    const op = p[pc], s = SPEC[op];
    if (!s) return done(5);
    const [imm, pops, net] = s;
    if (pc + imm >= p.length) return done(9);
    if (sp < pops) return done(2);
    if (sp + net > 256) return done(3);
    const next = pc + 1 + imm;
    pc = next;
    const b = D[sp - 1], a = D[sp - 2];
    if (op >= 0x10 && op < 0x23) {
      if (op >= 0x13 && op <= 0x16 && b == 0) return done(4);
      const ua = a >>> 0, ub = b >>> 0;
      const r = [a + b, a - b, Math.imul(a, b), a / b, a % b, ua / ub, ua % ub, -b, a & b, a | b, a ^ b, ~b,
        a << b, a >> b, a >>> b, 0, +(a == b), +(a < b), +(ua < ub)][op - 0x10];
      sp += net;
      D[sp - 1] = r;
      continue;
    }
    switch (op) {
      case 0: return done(0);
      case 1: D[sp++] = p.readInt8(pc - 1); break;
      case 2: D[sp++] = p.readInt32LE(pc - 4); break;
      case 3: sp--; break;
      case 4: D[sp++] = b; break;
      case 5: D[sp - 1] = a; D[sp - 2] = b; break;
      case 6: D[sp++] = a; break;
      case 7: { const x = D[sp - 3]; D[sp - 3] = a; D[sp - 2] = b; D[sp - 1] = x; break; }
      case 0x30: pc += p.readInt16LE(pc - 2); break;
      case 0x31: if (D[--sp] == 0) pc += p.readInt16LE(pc - 2); break;
      case 0x32: if (D[--sp] != 0) pc += p.readInt16LE(pc - 2); break;
      case 0x33: if (C.length == 64) return done(7); C.push(pc); pc = p.readUInt16LE(pc - 2); break;
      case 0x34: if (!C.length) return done(8); pc = C.pop()!; break;
      case 0x40: if (b >>> 8) return done(6); D[sp - 1] = M[b]; break;
      case 0x41: if (b >>> 8) return done(6); M[b] = a; sp -= 2; break;
      case 0x50: case 0x51: {
        const bytes = op == 0x51 ? [b & 255] : [...Buffer.from('' + b)];
        if (out.length + bytes.length > 65536) return done(11);
        out.push(...bytes); sp--; break;
      }
      case 0x52: D[sp++] = ip < input.length ? input[ip++] : -1; break;
      case 0x53: return done(b & 255);
    }
  }
}

const I = '/input/', O = '/output/';
for (const id of readdirSync(I)) {
  const [stdout, code] = run(readFileSync(I + id + '/program.bin'), readFileSync(I + id + '/input.bin'));
  mkdirSync(O + id, { recursive: true });
  writeFileSync(O + id + '/stdout.bin', stdout);
  writeFileSync(O + id + '/exit.txt', '' + code);
}
