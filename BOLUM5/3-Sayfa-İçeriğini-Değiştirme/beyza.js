const pdegeri=document.querySelector('p');
console.log(pdegeri.innerText);
// p etiketinin sadece içinde yazanı yazdırır

pdegeri.innerText='Beyzos Hız '
// Bu şekilde p'nin içindeki değer güncellenebilir

const pdegeri=document.querySelectorAll('p');

pdegeri.forEach(a =>{
    console.log(a.innerText);
    a.innerText = 'yeni alan'; //Bütün p etiketlerinin içi güncellenir
    a.innerText += 'yeni alan'; // Bütün p etiketlerinin içine yeni alan eklenir

})

const icerik=document.querySelector('.icerik');
console.log(icerik.innerHTML);
// icerik'in html kodu yazdırılır

icerik.innerHTML='<h2> Javascript </h2>'
// icerik'in html kodu güncellenebilir

icerik.innerHTML +='<h2> Javascript </h2>'
// icerik direkt güncellenmez sonuna yazılan eklenir

const ogrenciler=['beyzos','fatma','ilayda'];
ogrenciler.forEach(ogrenci =>{
    icerik.innerHTML +=`<p> ${ogrenci} </p>`
})
// içerik'in sonuna dizinin içindekiler yazılır eklenir
