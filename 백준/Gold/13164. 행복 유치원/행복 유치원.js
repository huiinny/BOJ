const fs = require('fs');
const { stderr } = require('process');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'C:/Users/hjara/js/example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, k] = input[0].split(" ").map(Number); 
const student = input[1].split(" ").map(Number);
//console.log(n, k);
let diff = [];
let sum=0;

for(let i=0; i<n-1; i++) {
    diff.push(student[i+1]-student[i]);
}

diff.sort((a, b) => a - b);

for(let i=0; i<n-k; i++) {
    sum+=diff[i];
}

console.log(sum);