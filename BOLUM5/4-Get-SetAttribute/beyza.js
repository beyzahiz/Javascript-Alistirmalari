const link=document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href','www.beyzahiz.com'); 
// link güncellendi

link.textContent='Beyza Hız';
// href'in yanındaki yani yazı değiştirilir

const pDegeri=document.querySelector('p');
pDegeri.setAttribute('class','error');
// class'ın ismi icerik'ten error olarak güncellenir

pDegeri.setAttribute('style','color:blue');
// style en başta yok. settAttribute ile style oluşturulur. 