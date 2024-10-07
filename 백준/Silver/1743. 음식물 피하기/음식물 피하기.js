const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/hjara/js/example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m, k] = input[0].split(" ").map(Number);
const trashPoint = input.slice(1).map(line=>line.split(" ").map(Number));
let maxTrash = 0;

let graph = Array.from(Array(n), ()=> Array(m).fill(0));

for(let [r, c] of trashPoint) {
    graph[r-1][c-1]=1;
}

// 상, 하, 좌, 우
const dx = [-1, 1, 0, 0]; //x축 기준으로 이동
const dy = [0, 0, -1, 1]; //y축 기준으로 이동

function bfs(x, y) {
    let queue = [[x, y]];
    let count = 1;
    graph[x][y]= 0;

    while(queue.length) {
        let [cx, cy] = queue.shift();

        for(let i=0; i<4; i++) {
            const nx = cx+dx[i];
            const ny = cy+dy[i];

            if (nx >= 0 && ny >= 0 && nx < n && ny < m && graph[nx][ny] === 1) {
                // 방문 처리 후 탐색 진행
                graph[nx][ny] = 0;
                queue.push([nx, ny]);
                count++;
            }
        }
    }
    return count;
}

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (graph[i][j] === 1) {
            maxTrash = Math.max(maxTrash, bfs(i, j));
        }
    }
}

console.log(maxTrash);