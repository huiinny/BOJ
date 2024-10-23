const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'C:/Users/hjara/js/example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
const rank = Array(n).fill(0);

for (let i=0; i<input.length-1; i++) {
    rank[i]=+input[i+1].trim();
}
//console.log(rank);
rank.sort((a, b)=>a-b);

let sum=0;
for (let i=0; i<n; i++) {
    if (rank[i]!==i+1) {
        sum += Math.abs(rank[i] - (i + 1));
    }
}
console.log(sum);