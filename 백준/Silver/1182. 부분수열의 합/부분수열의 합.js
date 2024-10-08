const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'C:/Users/hjara/js/example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, s] = input[0].split(" ").map(Number);  // N: 정수의 개수, S: 목표 합
const number = input[1].split(" ").map(Number);  // 주어진 수열

let count = 0;

function backtrack(index, currentSum) {

    if(index === n) {

        if (currentSum === s) {
            count++;
            
        }
        return;
    }
    backtrack(index+1, currentSum);
    backtrack(index+1, currentSum+number[index]);
}
backtrack(0, 0);

if (s === 0) {
    count--;  // 공집합은 제외하고 부분수열 계산
}

console.log(count);