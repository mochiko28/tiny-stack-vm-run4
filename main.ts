B=Buffer('DHTEEFFG        FFFFFFFEFFFEFFF FFF             LMMLD           EF              EEDE')
D=new Int32Array(256)
X=_=>{try{for(c=0;t++<1e6;){m=(p.readIntLE(c,n=(v=B[k=p[c]])>>2&7||1)-k)/256;c+=n
if(!(v>>6))return 5
if((s-=v&3)<0)return 2
x=D[s];y=D[s+1];z=D[s+2];a=x>>>0;b=y>>>0
if(k>18&k<23&!y)return 4
r=k>15&k<35?[[x+y,x-y,Math.imul(x,y),x/y,x%y,a/b,a%b,-x,x&y,x|y,x^y,~x,x<<y,x>>y,x>>>y,,x==y,x<y,a<b][k-16]]:[[],[m],[m],[],[x,x],[y,x],[x,y,x],[y,z,x]][k]||[]
switch(k){case 0:return 0
case 49:x=!x
case 50:if(!x)break
case 48:c+=m;break
case 51:if(C.push(c)>64)return 7;c=m&65535;break
case 52:if(!(c=C.pop()))return 8;break
case 64:if(x>>>8)return 6;r=[M[x]];break
case 65:if(b>>8)return 6;M[y]=x;break
case 81:x=String.fromCharCode(x)
case 80:if((w=u+x)[65536])return 11;u=w;break
case 82:r=[q[j++]??-1];break
case 83:return x&255}D.set(r,s);s+=r.length}return 10}catch(e){return e.code?9:3}}
({readdirSync:R,readFileSync:F,writeFileSync:W,mkdirSync:K}=require('fs'))
for(d of R(I='/input/')){p=F(I+d+'/program.bin');q=F(I+d+'/input.bin');M=[];C=[];u='';s=t=j=0
K(O='/output/'+d);W(O+'/exit.txt',X()+'');W(O+'/stdout.bin',u,'latin1')}
