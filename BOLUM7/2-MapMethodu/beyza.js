const points = [70,75,25,35,10,80,27];

// map methodu elemanlar tek tek dönerken bunları tek başına geriye döndürür

const newPoints = points.map(point => {
    return point +10;
});

console.log(newPoints);

const students = [
    {name: 'can', point: 40},
    {name: 'tuba', point: 60},
    {name: 'elif', point: 30},
    {name: 'osman', point: 100},
];

const newStudentsPoints = students.map(student =>{
    if(student.point < 50)
    {
        return {name :student.name ,point :student.point + 15}
    }
    else
    {
        return student
    }
});

console.log(newStudentsPoints);