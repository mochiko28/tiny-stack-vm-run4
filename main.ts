f=require('fs')
B=Buffer('DHTEEFFG        FFFFFFFEFFFEFFF FFF             LMMLD           EF              EEDE')
D=new Int32Array(256)
X=_=>{try{for(c=0;t++<1e6;){if(!((v=B[k=p.readUInt8(c)])>>6))return 5
m=(p.readIntLE(c,n=v>>2&7)-k)/256;c+=n
if(s<(v&3))return 2
x=D[s-=v&3];y=D[s+1];z=D[s+2]
switch(k){case 0:return 0
case 1:case 2:D[s++]=m;break
case 6:z=y;y=x
case 7:D[s++]=y;D[s++]=z;D[s++]=x;break
case 4:y=x
case 5:D[s++]=y;D[s++]=x;break
case 49:x=!x
case 50:if(!x)break
case 48:c+=m;break
case 51:if(C[63])return 7;C.push(c);c=m&65535;break
case 52:if(!(c=C.pop()))return 8;break
case 64:if(x>>>8)return 6;D[s++]=M[x];break
case 65:if(y>>>8)return 6;M[y]=x;case 3:break
case 80:x=''+x
case 81:if((w=u+(k>80?String.fromCharCode(x):x))[65536])return 11;u=w;break
case 82:D[s++]=q[j++]??-1;break
case 83:return x&255
default:if(k>18&k<23&!y)return 4
D[s++]=[x+y,x-y,Math.imul(x,y),x/y,x%y,(x>>>0)/(y>>>0),(x>>>0)%(y>>>0),-x,x&y,x|y,x^y,~x,x<<y,x>>y,x>>>y,0,x==y,x<y,x>>>0<y>>>0][k-16]}
if(s>256)return 3}return 10}catch{return 9}}
for(d of f.readdirSync(I='/input/')){p=f.readFileSync(I+d+'/program.bin');q=f.readFileSync(I+d+'/input.bin');M=[];C=[];u='';s=t=j=0
e=X();f.mkdirSync(O='/output/'+d);f.writeFileSync(O+'/stdout.bin',u,'latin1');f.writeFileSync(O+'/exit.txt',''+e)}
