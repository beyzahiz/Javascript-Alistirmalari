// sıralama için sort methodu kullanılır

const names = ['can','tuba','elif','hakan','osman'];
names.sort();  //isimleri alfabetik sıralar
console.log(names);
names.reverse();  //ters alfabetik sıralar


const points = [70,75,25,3,10,80,27];
points.sort();  //ilk basamağa bakarak sayıları sıralar
console.log(points);
points.reverse(); //ilk basamağa bakarak tersten sıralar büyükten küçüğe

points.sort((a,b)=> b-a);  //büyükten küçüğe sıralar. aşağıdaki students sortun kısa yazılma biçimi
points.sort((a,b)=> a-b);  //küçükten büyüğe sıralar


const students = [
    {name: 'can', point: 40},
    {name: 'tuba', point: 60},
    {name: 'elif', point: 30},
    {name: 'osman', point: 100},
];

// puanlara göre objeleri sıralar
students.sort((a,b) =>{
    if(a.point > b.point)
    {
        return -1;
    }
    else if(b.point > a.point)
    {
        return 1;
    }
    else
    {
        return 0;
    }
});