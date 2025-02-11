const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/Users/project/BOJ/example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [M, n] = input[0].split(" ").map(Number);

let x = 0, y = 0, d = 0;

// 동 북 서 남
const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]]; 

for (let i = 1; i <= n; i++) {
    let [cmd, num] = input[i].split(" ");
    num = Number(num);

    if (cmd === "TURN") {

        if (num === 0) { // 반시계
            d = (d+1) % 4;
        }
        else  { // 시계
            d = (d+3) % 4;
        }
    } 
    
    else if (cmd === "MOVE") {
        let nx = x + directions[d][0] * num;
        let ny = y + directions[d][1] * num;

        if (nx < 0 || nx > M || ny < 0 || ny > M) {
            console.log(-1);
            return;
        }

        x = nx;
        y = ny;
    }
}

console.log(x, y);