// iki tarih arasındaki farkı hesaplamakta kullanılır

const  startDate= new Date('08/15/2018 9:45:00'); //içerisinde yazan tarihi alır
const now=new Date();

const diff=now.getTime()-startDate.getTime(); //şimdiki zaman ile startDate arasındaki milisecond olarak

const mins=Math.round(diff/1000/60); //dakikaya çevrildi fark
const hours=Math.round(mins/60);  //saate çevrildi
const days=Math.round(hours/24);  //güne çevrildi
