const clock=document.getElementById("clock");
const Data=document.getElementById("Data")
setInterval(() => {
    let date =new Date();
//    date.getDate()+"-"+date.getMonth()

   Data.innerHTML= `<div>${date.getDate()}-${date.getMonth()}-${date.getFullYear()}</div>`;
    clock.innerHTML= date.toLocaleTimeString()
    // clock.innerHTML=date.getDate();
}, 1000);