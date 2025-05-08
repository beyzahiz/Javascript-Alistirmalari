const points = [70,75,25,35,10,80,27];

// filter methodunda elemanlar tek tek gezer. eğer içindeki koşul doğruysa elemana geri döner.

const studentsPassed = points.filter(point =>{
    return point > 50;
})   // 50 üstüne geri döner 

console.log(studentsPassed);


const student = [
    {name: 'can', passed: true},
    {name: 'tuba', passed: false},
    {name: 'elif', passed: false},
    {name: 'osman', passed: true},
];

const passingStudent = student.filter(student =>{
    return student.passed //true olanları yani geçenleri döndürür
    // !student.passed olsaydı false olanları döndürürdü
})

console.log(passingStudent);