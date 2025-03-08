// const dersler=[
//     {isim:'matematik',puan:90},
//     {isim:'fizik',puan:80},
//     {isim:'biyoloji',puan:85},
// ]


let ogrenci={
    ad: 'Beyza',
    yas: 21,
    email:'bhiz@gmail.com',
    sinif:12,
    dersler:[
        {isim:'matematik',puan:90},
        {isim:'fizik',puan:80},
        {isim:'biyoloji',puan:85},
    ],
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
        this.dersler.forEach(a =>{
            console.log(a.isim,a.puan);
        })
    },
};

console.log(this); // this bulunduğu kısmı gösterir
ogrenci.printLessons();