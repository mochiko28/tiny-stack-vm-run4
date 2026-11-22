({readFileSync:F,writeFileSync:W}=f=require('fs'))
B=Buffer('DHTEEFFG8FFFffffEFFFEFFF FFF94LMMLD92EF95EEDE'.replace(/\d/g,n=>' '.repeat(n)))
D=new Int32Array(256)
for(d of f.readdirSync(I='/input/')){p=F(I+d+'/program.bin');q=F(I+d+'/input.bin');M=[s=t=j=c=0];C=[u='']
f.mkdirSync(O='/output/'+d);try{for(;t++<1e6;){m=(p.readIntLE(c,n=(v=B[k=p[c]|0])>>2&7)-k)/256;c+=n
if((s-=v&3)<0)throw 2
x=D[s];y=D[s+1];a=x>>>0;b=y>>>0
if(!y&v>>5)throw 4
r=[,[m],[m],[],[x,x],[y,x],[x,y,x],[y,D[s+2],x]][k]||[x+y,x-y,Math.imul(x,y),x/y,x%y,a/b,a%b,-x,x&y,x|y,x^y,~x,x<<y,x>>y,x>>>y,,x==y,x<y,a<b].splice(k-16,1)
if(n==3&&k-49^!x)c+=m
if(k==51){if(C.push(c-m)>65)throw 7;c=m&65535}
if(k==52&&!(c=C.pop()))throw 8
if(k>>1==32){if((k&1?b:a)>>8)throw 6;k&1?M[y]=x:r=[M[x]]}
if(k>>1==40){if((w=u+(k&1?String.fromCharCode(x):x))[65536])throw 11;u=w}
if(k==82)r=[q[j++]??-1]
if(k%83<1)throw k&&x&255
D.set(r,s);s+=r.length}throw 10}catch(e){W(O+'/exit.txt',(e>=0?e:v>>6?e.code?9:3:5)+'')}W(O+'/stdout.bin',u,'ascii')}