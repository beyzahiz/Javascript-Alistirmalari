let yas=29;

if(true)
{
    let yas=35;
    console.log("İçerideki:",yas);
    if(true)
    {
        let yas=50;
        let ad="Can";
        var test="ahaha";
        console.log("İçeridekinin içindeki:",yas,ad,test);
    }
}

console.log("Dışarıdaki:",yas,ad,test);

// let ile tanımlanan sadece içeride yazılır. Dışarıda yazılamaz
// var ile tanımlanan içeride ve dışarıda yazılır.