const hora=document.getElementById('hr')
const min=document.getElementById('min')
const sec=document.getElementById("sec")
const mlc=document.getElementById("ms")

const relogio=setInterval(function tempo(){

let data=new Date()
let hr=data.getHours();
let mn=data.getMinutes();
let sc=data.getSeconds();
let ms=data.getMilliseconds();

hora.textContent=hr
min.textContent=mn
sec.textContent=sc
mlc.textContent=ms

if(hr<10){
    hora.innerHTML=`0${hr}`
}
if(mn<10){
    min.innerHTML=`0${mn}`
}
if(sc<10){
    sec.innerHTML=`0${sc}`
}
})