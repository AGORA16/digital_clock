setInterval(settime,1000)
var hr=document.getElementById("hr")
var mi=document.getElementById("min")
var se=document.getElementById("sec")
var a=document.getElementById("ap")

function settime(){
    var d=new Date()
    var h=d.getHours()
    var m=d.getMinutes()
    var s=d.getSeconds()
    var opt=document.getElementById("select").value
if(opt=="12"){
 
    if(h<10){
        if(h==0){
    h=12
    hr.textContent=h
   }
   else{
        h='0'+h
        hr.textContent=h
   }
    }
    else if(h>=12){
        h=h-12
        if(h<10){
        h='0'+h
        }
        hr.textContent=h
        a.textContent="PM"
        }
    if(m<10){
        m='0'+m
        mi.textContent=m
    }
    if(s<10){
        s='0'+s
        se.textContent=s
    }
}
else{

    if(h<10){
        h='0'+h
        hr.textContent=h
    }

    if(m<10){
        m='0'+m
        mi.textContent=m
    }
    if(s<10){
        s='0'+s
        se.textContent=s
    }
}
    hr.textContent=h
    mi.textContent=m 
    se.textContent=s
    
}