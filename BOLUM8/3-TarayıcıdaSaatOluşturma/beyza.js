const clock=document.querySelector('.clock');

const tick = () =>{
    const now = new Date();
    const hours=now.getHours();
    const minutes=now.getMinutes();
    const second=now.getSeconds();

   // console.log(hours,minutes,second);

    const html = 
    `
    <span>${hours}</span> :
    <span>${minutes}</span> :
    <span>${second}</span> :
    `
    clock.innerHTML=html;

};

setInterval(tick, 1000);  //her saniye çağırmayı sağlar



