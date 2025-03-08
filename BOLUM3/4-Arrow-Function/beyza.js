const karealani=(kenar) =>{
   return kenar**2;
}
// (kenar) eğer tek parametre varsa parantez kullanılmak zorunda değil 
// return tek satırsa {} kullanılmak zorunda değil return de yazılmayabilir
const sonuc = karealani(6);
console.log(sonuc);


const beyza=function()
{
    return 'beyzoş';
}
const sonuc2=beyza();
console.log(sonuc2);
// hiçbir parametre almıyorsa () yazılabilir.
// const beyza= () => 'beyzoş';



/* const fatura = function(urunler, vergi){
    let toplam=0;
    for(let i=0; i<urunler.length; i++){
        toplam += urunler[i] + urunler[i] * vergi;
    }
    return toplam;
}
console.log(fatura([10,20,30],0.25));
*/

// Arrow function şekli:
const fatura = (urunler, vergi)=>{
    let toplam=0;
    for(let i=0; i<urunler.length; i++){
        toplam += urunler[i] + urunler[i] * vergi;
    }
    return toplam;
}
console.log(fatura([10,20,30],0.25));