const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/hjara/js/example.txt";
const input = fs.readFileSync(filePath).toString().trim().split('\n');
[N, ...arr] = input;

//console.log(input);
const mem = arr.map(line => {
    const [age, name] = line.split(' ');
    return [Number(age), name];
});

mem.sort((a, b) => a[0] - b[0]);

mem.forEach(member => {
    console.log(member[0], member[1]);
});
