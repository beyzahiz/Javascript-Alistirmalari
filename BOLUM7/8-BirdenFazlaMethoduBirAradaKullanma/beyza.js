const students = [
    {name: 'can', point: 40},
    {name: 'tuba', point: 60},
    {name: 'elif', point: 30},
    {name: 'osman', point: 100},
    {name: 'deniz', point: 70},
    {name:'hakan', point:45},
];

const filtered = students.filter(student => student.points < 50);

const plusPoint = filtered.map(student =>{
    return  `${student.name} adlı öğrencinin yeni notu ${student.point+15}`;
})

console.log(plusPoint);

const newNotes = students.filter(student => student.points < 50).map(student => `${student.name} adlı öğrencinin yeni notu ${student.point+15}`);