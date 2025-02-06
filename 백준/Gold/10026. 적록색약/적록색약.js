const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/Users/project/BOJ/example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
let grid = [];
let visited = Array.from({ length: n }, () => Array(n).fill(false));
const direction = [[-1, 0], [0, -1], [0, 1], [1, 0]];

for(let i=1; i<=n; i++) {
    grid.push(input[i].split(""));
}

let group=0;

for (let i=0; i<n; i++) { // 행
    for (let j=0; j<n; j++) { // 열
        let character = grid[i][j];
        if (!visited[i][j]) {
            bfs(i, j, character);
            group++;
        }
    }
}

visited = Array.from({ length: n }, () => Array(n).fill(false));

for (let i=0; i<n; i++) { // 행
    for (let j=0; j<n; j++) { // 열
        if (grid[i][j]==='G') {
            grid[i][j] = 'R';
        }
        continue;
    }
}

let RGBgroup=0;

for (let i=0; i<n; i++) { // 행
    for (let j=0; j<n; j++) { // 열
        let character = grid[i][j];
        if (!visited[i][j]) {
            bfs(i, j, character);
            RGBgroup++;
        }
    }
}

console.log(group, RGBgroup);

function bfs(i, j, character) {
    let queue = [[i, j]];
    visited[i][j] = true; 
  
    while (queue.length) {
        let [x, y] = queue.shift();

        for (let [dx, dy] of direction) {
            let nx = x + dx;
            let ny = y + dy;
            
            if (nx>=0 && ny>=0 && nx < n && ny <n && grid[nx][ny] === character && !visited[nx][ny]) {
                visited[nx][ny] = true; // 현재 칸 방문 표시
                queue.push([nx, ny]);
            }
        }

    }
}