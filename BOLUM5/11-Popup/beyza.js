const button=document.querySelector('button');
const mainPopup=document.querySelector('.main-popup');
const close=document.querySelector('.popup-close');


button.addEventListener('click',()=>{
    mainPopup.style.display='block';
})
// tıklandığında popup açılır


close.addEventListener('click',()=>{
    mainPopup.style.display='none';
})
// tıklandığında popup kapanır

mainPopup.addEventListener('click',e=>{

    console.log(e.target);
    if(e.target.className ==='main-popup')
    {
        mainPopup.style.display='none';
    }
})
// herhangi bir yere tıklandığında popup açılır