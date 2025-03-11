const baslik=document.querySelector('h1');
baslik.setAttribute('style','padding:50px');
// yellow özelliği silinir. sadece padding kalır.
// setAttribute ile özellik bu şekilde değişir.

console.log(baslik.style);

baslik.style.paddin='50px';
// eski özellik silinmez. yeniisi üzerine eklenir.

baslik.style.fontSize='60px';
