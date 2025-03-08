let ogrenci={
    ad: 'Beyza',
    yas: 21,
    email:'bhiz@gmail.com',
    sinif:12,
    dersler:['matematik','fizik','biyoloji'],
    login()
    {
        console.log('Öğrenci giriş yaptı');
    },
    logout()
    {
        console.log('Öğrenci çıkış yaptı');
    },
    printLessons()
    {
        console.log(this.dersler);
        this.dersler.forEach(ders =>{
            console.log(ders);
        })
    },
};

console.log(this); // this bulunduğu kısmı gösterir
ogrenci.printLessons();
