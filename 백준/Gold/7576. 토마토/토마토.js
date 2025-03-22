const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/Users/project/BOJ/example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [m, n] = input[0].split(" ").map(Number);
const box = input.slice(1).map(line => line.split(" ").map(Number));
const visited = Array.from({ length: n }, () => Array(m).fill(false));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let queue = [];
let day = 0;

// 초기 익은 토마토 큐에 추가
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (box[i][j] === 1) {
            queue.push([i, j]);
            visited[i][j] = true;
        }
    }
}

// BFS로 토마토 익히기
while (true) {
    const nextQueue = [];
    for (const [x, y] of queue) {
        for (let d = 0; d < 4; d++) {
            const nx = x + dx[d];
            const ny = y + dy[d];
            if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
                if (box[nx][ny] === 0 && !visited[nx][ny]) {
                    box[nx][ny] = 1;
                    visited[nx][ny] = true;
                    nextQueue.push([nx, ny]);
                }
            }
        }
    }
    if (nextQueue.length === 0) break;
    queue = nextQueue;
    day++;
}

// 결과 체크
let hasUnripe = false;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (box[i][j] === 0) {
            hasUnripe = true;
        }
    }
}

console.log(hasUnripe ? -1 : day);
