const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/Users/project/BOJ/example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
const sequence = input.slice(1).map(Number);

let stack = [];
let num = 1;
let result = [];

for (let i=0; i < n; i++) {
    let curr = sequence[i]; // 목표 수열 값
    
    while (num <= curr) {
        stack.push(num);
        result.push("+");
        num++;
    }

    if(stack[stack.length - 1] === curr) {
        stack.pop();
        result.push("-");
    }
    else {
        console.log('NO');
        return 0;
    }
}

console.log(result.join("\n"));
