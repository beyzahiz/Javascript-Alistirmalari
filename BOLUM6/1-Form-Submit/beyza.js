const form=document.querySelector('.signupForm');
const username=document.querySelector('#username');

form.addEventListener('submit', e=>{
    e.preventDefault();
    // Sayfanın yenilenmesini önler sayfa refresh olmaz
    console.log('Form gönderildi');
    console.log(username.value);
    // username içindeki değeri konsola bastırır
    console.log(form.username.value);
    // form içindeki username'in değerini konsola bastırır
})