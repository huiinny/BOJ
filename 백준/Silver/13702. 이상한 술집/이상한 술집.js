const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/Users/project/BOJ/example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const ml = input.slice(1).map(Number);

let left = 1;
let right = Math.max(...ml);
let result = 0;

while (left <= right) {
    const mid = Math.floor((left+right) / 2);

    let count = 0;

    for (let m of ml) {
        count += Math.floor(m/mid);
    }

    if (count >= K) { // 막거리를 K명 이상으로 나눠줄 수 있을 때
        left = mid + 1; // 오른쪽 탐색
        result = mid;
    }
    else {
        right = mid - 1; // 왼쪽 탐색
    }

}console.log(result);