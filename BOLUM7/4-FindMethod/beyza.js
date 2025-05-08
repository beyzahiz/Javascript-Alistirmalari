const points = [70,75,25,35,10,80,27];

// id bulmada, datada bir veriyi bulmada kullanılır

const highPoint = points.find(point =>{
    return points > 70
});

// sadece 75'i return eder tek bir değeri 

console.log(highPoint);