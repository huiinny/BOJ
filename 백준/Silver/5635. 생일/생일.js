const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/hjara/js/example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();

const mem = input.map(line => {
    const [name, day, month, year] =line.trim().split(" ");

    return [ name,
        parseInt(day),       // 일
        parseInt(month),   // 월
        parseInt(year)      // 연도
    ]
});

//console.log(mem);

mem.sort((a, b) => {
   
    if (a[3] !== b[3]) {
        return a[3] - b[3];
    }
  
    if (a[2] !== b[2]) {
        return a[2] - b[2];
    }
    
    return a[1] - b[1];
});

//console.log(mem);
console.log(mem[mem.length-1][0]);
console.log(mem[0][0]);


