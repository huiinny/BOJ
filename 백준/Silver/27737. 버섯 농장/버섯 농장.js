const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/Users/project/BOJ/example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m, k] = input[0].split(" ").map(Number);
const grid = [];
for (let i=1; i<n+1; i++) {
    grid.push(input[i].split(" ").map(Number));
}

const direction = [[-1, 0], [0, -1], [0, 1], [1, 0]];
//console.log(grid);

let visited = Array.from({ length: n }, () => Array(n).fill(false));
let mushroom = 0;
let group = 0;
for (let i=0; i<n; i++) { // 행
    for (let j=0; j<n; j++) { // 열
        if (grid[i][j] === 0 && !visited[i][j]) { // 버섯 포자를 심을 수 있는 칸
            size = bfs(grid, i, j, n);
            mushroom += Math.ceil(size/k);
            group++;
        }
    }
}

if (mushroom > m || group === 0) {
    console.log("IMPOSSIBLE");
} else {
    console.log(`POSSIBLE\n${m - mushroom}`);
}

function bfs(grid, i, j, n) {
    let queue = [[i, j]];
    visited[i][j] = true; // 현재 칸 버섯 심기
    let cnt = 1;

    while (queue.length) {
        let [x, y] = queue.shift();

        for (let [dx, dy] of direction) {
            let nx = x + dx;
            let ny = y + dy;
            
            if (nx>=0 && ny>=0 && nx < n && ny <n && grid[nx][ny] === 0 && !visited[nx][ny]) {
                visited[nx][ny] = true; // 다음 칸 버섯 심기
                cnt++; // 그룹 갯수 카운트
                queue.push([nx, ny]);
            }
        }

    }
    return cnt;
}