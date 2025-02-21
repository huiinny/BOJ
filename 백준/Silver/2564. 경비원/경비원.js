const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/Users/project/BOJ/example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [W, H] = input[0].split(" ").map(Number);
const N = +input[1];
const store = input.slice(2, 2 + N).map(line => line.split(" ").map(Number));
const [dgDir, dgDist] = input[2 + N].split(" ").map(Number);

const getLine = (dir, dist) => {
    switch (dir) {
        case 1: return dist // 북쪽
        case 2: return 2 * W + H - dist;   // 남쪽
        case 3: return 2 * (W + H) - dist;   // 서쪽
        case 4: return W + dist;   // 동쪽
    }
};

let totalDistance = 0;

const dgLine = getLine(dgDir, dgDist); // 동근이의 위치
const totalLength = 2 * (W + H); // 전체 둘레 길이

for (const [storeDir, storeDist] of store) {
    const storeLine = getLine(storeDir, storeDist); // 상점의 위치
    
    // 시계방향 거리 & 반시계방향 거리 비교
    const clockwiseDist = Math.abs(dgLine - storeLine); // 거리 차 1 = 동근위치 - 상점 거리
    const counterClockwiseDist = totalLength - clockwiseDist; // 거리 차 2
    
    totalDistance += Math.min(clockwiseDist, counterClockwiseDist); // 최솟값
}

console.log(totalDistance);
