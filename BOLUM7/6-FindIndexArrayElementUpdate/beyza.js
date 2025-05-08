const points = [70,75,25,35,10,80,27];
const arrayIndex= points.findIndex(point => point == 35);
points[arrayIndex]=45;
console.log(points);
// 35 olan değer 45 olarak güncellenir geriye kalan elemanlar aynı kalır

const students = [
    {name: 'can', point: 40},
    {name: 'tuba', point: 60},
    {name: 'elif', point: 30},
    {name: 'osman', point: 100},
];

// bir elemanı aynı sırada kalacak şekilde güncellemek için kullanılır. 
// datayı yeri aynı kalacak şekilde günceller

const objectIndex=students.findIndex(student => student.name == 'osman');
students[objectIndex].name='hakan';
console.log(students);