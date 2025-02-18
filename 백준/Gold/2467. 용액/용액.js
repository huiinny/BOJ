const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/Users/project/BOJ/example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
const arr = input[1].split(" ").map(Number);

let left = 0;
let right = N-1;
let min = Infinity;
let result = [];

while (left < right) {

    let sum = arr[left] + arr[right]
    let absSum = Math.abs(sum);
    
    if (absSum < min) {
        min = absSum;
        result = [arr[left], arr[right]];
    }
     
    if (sum===0) {
        break;
    }

    if (sum < 0) {
        left++; // sum이 음수면 더 큰 값을 필요로 하므로 left 증가
    } else {
        right--; // sum이 양수면 더 작은 값 필요 → right 감소
    }
}

console.log(result.join(" ")); // 최적의 두 용액 출력