const days=document.querySelector("#days")
const hours=document.querySelector("#hours")
const minutes=document.querySelector("#minutes")
const seconds=document.querySelector("#seconds")
const dd=document.querySelector("#csd")


function updatetime(){
const currentyear=new Date().getFullYear();
const currentyr=new Date(`january 1 ${currentyear+1} 00:00:00`);

const currentdate=new Date();

const diff=currentyr-currentdate

/*
1000ms=1 sec
60 sec = 1 min
*/
const d=Math.floor(diff/1000/60/60/24)
const h=Math.floor((diff/1000/60/60)%24)
const min=Math.floor((diff/1000/60)%60)
const sec=Math.floor((diff/1000)%60)
const up=2025

//console.log(d+" "+h+" "+min+" "+sec+" ")
days.innerHTML=d<10?"0"+d:d;
hours.innerHTML=h<10?"0"+h:h;
minutes.innerHTML=min<10?"0"+min:min;
seconds.innerHTML=sec<10?"0"+sec:sec;
dd.innerHTML=d&h&min&sec==0?up+1:up;

}

setInterval(updatetime,1000)