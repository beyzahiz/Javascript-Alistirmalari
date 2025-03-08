const yas=20;

if(yas>18)
{
    console.log("18 yaşından büyüktür");
}

const adSoyad=["beyza","fatma","ilayda"];
if(adSoyad.length > 2 )
{
    console.log("2 den büyük");
}

const sifre="dashahshahsahshhsah";
if(sifre.length>=8)
{
    console.log("Şifre yeterince uzun");
}
else
{
    console.log("Şifreyi yeniden giriniz");
}

const yeniSifre="ahaha";
if(yeniSifre.length >=12)
{
    console.log("Şifre güçlü");
}
else if(yeniSifre.length >=8)
{
    console.log("Şifre yeterli");
}
else
{
    console.log("Şifreyi yeniden giriniz");
}
