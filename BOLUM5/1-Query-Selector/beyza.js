const hata=document.querySelector('p'); 
// Sadece ilk p etiketini seçer

const hata2=document.querySelector('.error'); 
// Sadece classı error olan ilkini seçer

const hata3=document.querySelector('div.error');
// div etiketi içindeki classı error olanı seçer

const hatalar1=document.querySelectorAll('p');
// p etiketine sahip olanların hepsini seçer

console.log(hatalar1[0]);
// İlk p etiketini basar sadece

hatalar1.forEach(hata =>{
    console.log(hata);
})

