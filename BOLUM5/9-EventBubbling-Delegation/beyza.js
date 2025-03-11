const ul=document.querySelector('ul');
ul.addEventListener('click',e=>{
    console.log(e);
    console.log(e.target);
    if(e.target.tagName=== 'LI')
        {
            e.target.remove();
        }
})
// Sonradan eklenenler de bu yöntemle tıklanıldığında silinebilir.
// Genel kapsayıcı

liElemanlari.forEach(eleman =>{
    eleman.addEventListener('click', (e)=>{
        e.stopPropagation();
        // Sadece li için çalışmasını sağlar. İki kere yazdırılmasını önler.
        console.log(e.target);
        
    })
})
// Şuan böyle olduğunda bir elemana tıklandığında iki kere konsola yazdırır
// Çünkü li ul'un üst elemanı. İkisi de yazdırıyor

