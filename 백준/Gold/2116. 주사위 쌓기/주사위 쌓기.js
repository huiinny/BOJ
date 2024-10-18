const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'C:/Users/hjara/js/example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0]; // 주사위 개수

const dice = input.slice(1).map(line => line.split(" ").map(Number));

// 주어진 주사위에서 아랫면에 맞는 윗면과 최대 옆면 값을 찾는 함수
function findMax(dice, bottom) {
    for (let i = 0; i < 6; i++) {
        if (dice[i] === bottom) {
            if (i === 0) return [dice[5], Math.max(dice[1], dice[2], dice[3], dice[4])]; // A-F
            else if (i === 1) return [dice[3], Math.max(dice[0], dice[2], dice[4], dice[5])]; // B-D
            else if (i === 2) return [dice[4], Math.max(dice[0], dice[1], dice[3], dice[5])]; // C-E
            else if (i === 3) return [dice[1], Math.max(dice[0], dice[2], dice[4], dice[5])]; // D-B
            else if (i === 4) return [dice[2], Math.max(dice[0], dice[1], dice[3], dice[5])]; // E-C
            else if (i === 5) return [dice[0], Math.max(dice[1], dice[2], dice[3], dice[4])]; // F-A
        }
    }
}

let maxSum = 0;

for (let i = 1; i < 7; i++) { // 첫 번째 주사위의 아랫면을 1부터 6까지 설정
    let bottom = i;
    let total = 0;

    for (let j = 0; j < n; j++) { // 나머지 주사위 계산
        const [top, sideMax] = findMax(dice[j], bottom);
        total += sideMax;
        bottom = top; 
    }

    if (total > maxSum) {
        maxSum = total;  
    }
}

console.log(maxSum);
