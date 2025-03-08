let ogrenci={
    ad: 'Beyza',
    yas: 21,
    email:'bhiz@gmail.com',
    sinif:12,
    dersler:['matematik','fizik','biyoloji'],
    login:function()
    {
        console.log('Öğrenci giriş yaptı');
    },
    logout:function()
    {
        console.log('Öğrenci çıkış yaptı');
    },
};

/*
    logout()
    {
        console.log('Öğrenci çıkış yaptı');
    },
*/
// function ifadesi kaldırılıp logout() şeklinde de yazılabilir

ogrenci.login();
ogrenci.logout();