const ulum=document.querySelector('.main');

let ogrenciler=['fatma','hakan','tugce','tugba'];

let html=``;

ogrenciler.forEach(ogrenci =>{
    html += `<li> ${ogrenci} </li>`
})

console.log(html);

ulum.innerHTML=html;