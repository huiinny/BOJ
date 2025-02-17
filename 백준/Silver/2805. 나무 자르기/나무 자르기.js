const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/Users/project/BOJ/example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const tree = input[1].split(" ").map(Number);

let left = 0;
let right = Math.max(...tree); // H의 최댓값 (가장 큰 나무 높이)
let height = 0;

function getWood(H) {
    let sum = 0;
    for (let i of tree) {
        if (i > H) {
            sum += i - H;
        }
    }
    return sum;
}


while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (getWood(mid) >= M) {
        height = mid;
        left = mid + 1; // 높이 키우기
    }
    else right = mid - 1; // 높이 줄이기
}

console.log(height);
