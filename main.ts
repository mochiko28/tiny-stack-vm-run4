D=new Int32Array(256);E=e=>{throw e^3}
for(d of({readFileSync:F,writeFileSync:W}=f=require('fs')).globSync('/input/*')){p=F(d+'/program.bin');C=[s=j=c=u='']
f.mkdirSync(O='/out'+d.slice(3));try{for(t=1e6;t--;){k=p[c++];q='04711223 222222212221222 222 55550 12 1101'.split` `[h=k>>4]?.[k%16];y=D[s-1];s-=q>3?(m=p.readIntLE(c,q-=3,c+=q),k%17>14):q
x=D[s>=0?k-19>>2|y?s:E(4):E(s?2:k?5:9)];a=x>>>0;b=y>>>0
k%83||E(k&&x&255)
s+=D.set(r=h<3?[0,[y,x],[x,y,x],[D[s+1],y,x]][k*3-8>>2]??[[x+y,x-y,Math.imul(x,y),x/y,x%y,a/b,a%b,-x,x&y,x|y,x^y,~x,x<<y,x>>y,x>>>y,,x==y,x<y,a<b][k-16]??m]:h<4?c=k<51?k%7^!x?c+m:c:k&1?C.push(c)>65?E(7):m&65535:C.pop()||E(8):h<5?b>>8?E(6):k&1?C[~y]=x:[C[~y]]:k<82?!(u=(w=u+(k&1?String.fromCharCode(x):x))[65536]?E(11):w):[F(d+'/input.bin')[j++]??-1],s)|r.length}E(10)}catch(e){W(O+'/exit.txt',''+(e.code?9:e^3))}W(O+'/stdout.bin',u,'ascii')}