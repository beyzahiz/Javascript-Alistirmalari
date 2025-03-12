const kutu=document.querySelector('.kutu');

kutu.addEventListener('mousemove',e=>{
    console.log(e);
    console.log(e.offsetX,e.offsetY);
    // mouse ile üstüne gelindiğinde koordinatları gösterir konsolda
    kutu.textContent=`x koordinatı ${e.offsetX}, y koodirnatı ${e.offsetY}`
    // mouse ile üstüne gelindiğinde koordinatları x ve y olarak ekrana yazdırır
})

document.addEventListener('wheel',e =>{
    console.log(e.pageX,e.pageY);
})