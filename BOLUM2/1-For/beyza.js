for(let i=0; i<10; i++)
{
    console.log(i);
}
console.log("Döngü bitti");

const adSoyad=['beyza','tugce','fatma'];

for(let i=0; adSoyad.length; i++)
{
  //  console.log(adSoyad[i]);

  let html= `<div> ${adSoyad[i]} </div>`
  console.log(html);
}