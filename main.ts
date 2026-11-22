F=(f=require('fs')).readFileSync;W=f.writeFileSync
D=new Int32Array(256);E=e=>{throw e}
for(d of f.readdirSync(I='/input/')){p=F(I+d+'/program.bin');q=F(I+d+'/input.bin');M=[s=j=c=0];C=[u='']
f.mkdirSync(O='/output/'+d);try{for(t=1e6;t--;s+=r.length|0){k=p[c++];n=k<3?k*k:k>>2==12&&2;m=n&&p.readIntLE(c,n);c+=n
s-='00011223 222222212221222 222 01100 12 1101'.split` `[k>>4]?.[k%16]
s>=0||E(s<0?2:k+1?5:9);x=D[s];y=D[s+1];a=x>>>0;b=y>>>0
k-19>>>2||y||E(4);k%83||E(k&&x&255)
D.set(r=k<8?[,[m],[m],0,[x,x],[y,x],[x,y,x],[y,D[s+2],x]][k]:k<35?[[x+y,x-y,Math.imul(x,y),x/y,x%y,a/b,a%b,-x,x&y,x|y,x^y,~x,x<<y,x>>y,x>>>y,,x==y,x<y,a<b][k-16]]:
k<53?c=k<51?k-49^!x?c+m:c:k&1?C.push(c)>65?E(7):m&65535:C.pop()||E(8):k<66?(k&1?b:a)>>8?E(6):k&1?M[y]=x:[M[x]]:
k<82?!(u=(w=u+(k&1?String.fromCharCode(x):x))[65536]?E(11):w):[q[j++]??-1],s)}E(10)}catch(e){W(O+'/exit.txt',''+(e.code?9:e>=0?e:3))}W(O+'/stdout.bin',u,'ascii')}