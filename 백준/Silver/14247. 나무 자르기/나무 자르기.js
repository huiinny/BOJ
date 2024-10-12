const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'C:/Users/hjara/js/example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n= parseInt(input[0]);
const tree = input[1].split(" ").map(Number);
let grow = input[2].split(" ").map(Number);

grow = grow.map((g, i) => [g, tree[i]]); // 2차원 배열로 나무길이, 성장길이를 저장한다.

let cnt = 0;

grow.sort((a, b) => a[0] - b[0]); // 성장길이기준으로 오른차순 정렬
//console.log(grow);

for (let i=0; i<n; i++) {
    cnt = cnt + grow[i][1] + i*grow[i][0];
}

console.log(cnt);