({readFileSync:F,writeFileSync:W}=f=require('fs'))
B=Buffer('DHTEEFFG8FFFffffEFFFEFFF FFF94LMMLD92EF95EEDE'.replace(/\d/g,n=>' '.repeat(n)))
D=new Int32Array(256)
for(d of f.readdirSync(I='/input/')){p=F(I+d+'/program.bin');q=F(I+d+'/input.bin');M=[s=t=j=c=0];C=[u='']
f.mkdirSync(O='/output/'+d);W(O+'/exit.txt',(_=>{try{for(;t++<1e6;){m=(p.readIntLE(c,n=(v=B[k=p[c]])>>2&7||1)-k)/256;c+=n
if(v>>6^1)return 5
if((s-=v&3)<0)return 2
x=D[s];y=D[s+1];a=x>>>0;b=y>>>0
if(!y&v>>5)return 4
r=[,[m],[m],[],[x,x],[y,x],[x,y,x],[y,D[s+2],x]][k]||[x+y,x-y,Math.imul(x,y),x/y,x%y,a/b,a%b,-x,x&y,x|y,x^y,~x,x<<y,x>>y,x>>>y,,x==y,x<y,a<b].splice(k-16,1)
if(n==3&&k-49^!x)c+=m
if(k==51){if(C.push(c-m)>65)return 7;c=m&65535}
if(k==52&&!(c=C.pop()))return 8
if(k>>1==32){if((k&1?b:a)>>8)return 6;k&1?M[y]=x:r=[M[x]]}
if(k>>1==40){if((w=u+(k&1?String.fromCharCode(x):x))[65536])return 11;u=w}
if(k==82)r=[q[j++]??-1]
if(k%83<1)return k&&x&255
D.set(r,s);s+=r.length}return 10}catch(e){return e.code?9:3}})()+'');W(O+'/stdout.bin',u,'ascii')}