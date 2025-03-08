/* 
const a=(callBacka) => {
    let yas=40;
    callBacka(yas)
};
 
a(function(value)
{
    console.log(value);
}) 
*/

let ogrenciler=['fatma','hakan','tugce','tugba'];
ogrenciler.forEach(function()
{
    console.log("Selam");
})

ogrenciler.forEach(function(kisi,index)
{
    console.log(kisi,index);
})

const ogrenci= (kisi,index) => 
{
    console.log(`${index} - ${kisi}`);
}

ogrenciler.forEach(ogrenci);