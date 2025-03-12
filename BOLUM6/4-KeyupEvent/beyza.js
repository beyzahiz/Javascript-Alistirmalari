const form=document.querySelector('.signupForm');
const message=document.querySelector('.message');
const usernamePattern=/^[a-z]{6,10}$/;

form.addEventListener('submit', e=>{
    e.preventDefault();
    const username=form.username.value;

    if(usernamePattern.test(username))
    {
        message.textContent='Başarılı';
    }
    else
    {
        message.textContent='Lütfen uygun hale getirin'
    }

})

form.username.addEventListener('keyup', e=>{
    console.log(e.target.value);
    if(usernamePattern.test(e.target.value))
    {
        console.log('Başarılı');
        form.username.setAttribute('class','success');

    }
    else
    {
        console.log('Başarısız');
        form.username.setAttribute('class','error');
    }
})
// Karakter girdikçe konsola başarılı/başarısız yazdırır
// patterne uygun olup olmadığına bakılır
// istenilene uygun yazıldığında kutucuğun çevresi yeşil olur
// istenilene uygun değilse kırmızı olur

