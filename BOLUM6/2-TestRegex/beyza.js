const username='beyza';
const pattern=/[a-z]{6,10}/;

let sonuc=pattern.test(username);
console.log(sonuc);
// username'in değerine göre true veya false döndürür

const pattern2=/^[a-z]{6,10}$/;
// başlangıç ve bitişinde hepsi küçük harf olmalı 6 ile 10 karakter arasında olmalı

let sonuc2=username.search(pattern);
// username içinde pattern'i arar
// yoksa -1 varsa 0 ve 0dan büyük değerler döner


