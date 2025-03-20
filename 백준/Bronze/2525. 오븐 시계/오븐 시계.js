const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/Users/project/BOJ/example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [a, b] = input[0].split(" ").map(Number);
const c = +input[1];

let minute = b + c;
let hour = a;

if (minute >= 60) {
    let round = Math.floor(minute / 60);
    hour = a + round
    minute = minute % 60;
}

hour = hour % 24;
console.log(hour, minute);