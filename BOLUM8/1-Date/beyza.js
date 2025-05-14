const now = new Date();  //Gün ay yıl saat yazdırır
console.log(now);

console.log(typeof now);

console.log('Year:', now.getFullYear()); //Yılı yazdırır
console.log('Month:', now.getMonth()); //Ayı yazdırır. ocak sayı sıfırıncı indexte tutulur
console.log('Date:', now.getDate()); //Ayın kaçıncı günü olduğunu yazdırır
console.log('Day:', now.getDay()); //Günü yazdırır. pazar sıfırıncı indexte tutulur
console.log('Hours:', now.getHours()); //Saati yazdırır
console.log('Minutes:', now.getMinutes()); //Dakikayı yazdırır
console.log('Second:', now.getSeconds()); //Saniyeyi yazdırır


console.log('timestamp:', nowgetTime());  //1 ocak 1970 den itibaren milisaniye olarak ne kadar zaman geçtiğini yazdırır
console.log(now.toDateString()); //Gün ay yıl haftanın günü yazdırır
console.log(now.toTimeString());  //Saati yazdırır dakika saniye
console.log(now.toLocaleString());  //Localde tutulan saati yazdırır