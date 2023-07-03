let a = new Date()
let h=a.getHours()
let m=a.getMinutes()
let s=a.getSeconds()
let d=a.getDate()
console.log(typeof h,m,s,d)
setInterval(function(){
  s+=1;
  if(s==60)
  {
    s=0;
    m+=1;
    if(m==60)
    {
      m=0;
      h+=1
      if(h==24)
      {
        h==0;
        d+=1;
        if(d==30)
        {
          d=1
        }
      }
    }
  }
  date.innerHTML=d
  hour.innerHTML=h
  min.innerHTML=m
  sec.innerHTML=s
},1000)