let ogrenci={
    ad: 'Beyza',
    yas: 21,
    email:'bhiz@gmail.com',
    sinif:12,
    dersler:['matematik','fizik','biyoloji']
};

console.log(ogrenci);
console.log(ogrenci.yas);

ogrenci.yas=18;
console.log(ogrenci.yas);

console.log(ogrenci['ad']);

ogrenci['ad']='fatma';
console.log(ogrenci['ad']);

console.log(typeof ogrenci);
