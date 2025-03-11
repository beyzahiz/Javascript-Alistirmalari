const icerik=document.querySelector('p');
console.log(icerik.classList); 
// classlar listelenir.

icerik.classList.add('beyza');
// beyza isimli class eklenir

icerik.classList.remove('error');
// error isimli class kaldırılır

const pDegeri=document.querySelectorAll('p');

pDegeri.forEach(can => { 
    if(can.textContent.includes('error'))
    {
        can.classList.add('error');
    }
    if(can.textContent.includes('success'))
    {
        can.classList.add('success');
    }
});
// içeriklere bakılır. eğer error içeriyorsa error classına ait özellikler uygulanır.
// eğer success kelimesini içeriyorsa success classına ait özellikler uygulanır.