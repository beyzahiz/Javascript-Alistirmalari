const button=document.querySelector('button');

button.addEventListener('click',() =>{
    console.log('Tıklandı');
})

// Butona tıklanıldıkça konsola tıklandı yazdırır

const liElemanlari=document.querySelectorAll('li');

liElemanlari.forEach(eleman =>{

    eleman.addEventListener('click', (e)=>{
        console.log(e.target);
        // Bulunulan etiketle birlikte seçilmesini sağlar
        console.log('Liye tıklandı');
        e.target.style.color='blue';
        //Tıklanılanın rengini mavi yapar
    })
})
// li elemanlarına tıklanıldıkça Liye tıklanıldı yazdırır


const ul=document.querySelector('ul');
ul.remove();
// bütün ul'lar ul değişkenine atandı. ul değişkeni kaldırıldı.
// bütün ul kaldırılmış olur.

liElemanlari.forEach(eleman =>{
    eleman.addEventListener('click', (e)=>{
        e.target.remove();
        //Tıklanılan kaldırılır
    })
})

button.addEventListener('click',() =>{
    const li=document.createElement('li');
    li.textContent='Javascript';
    // Javascript isimli yeni bir li oluşturur

    ul.append(li);
    // Oluşturulan li'yi en sona ekler

    ul.prepend(li);
    // En başa ekler

})