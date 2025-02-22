const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/Users/project/BOJ/example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
const jump = input[1].split(" ").map(Number);

function bfs() {
    if (N === 1) {
        return 0;
    }

    const queue = [[0, 0]]; // 현재 위치, cnt
    const visited = new Array(N).fill(false);
    visited[0] = true;

    while(queue.length) {
        const [num, cnt] = queue.shift(); 

        for (let i=num+1; i<=num+jump[num]; i++) {
            if (i === N-1) return cnt+1;
            if (!visited[i]) {
                visited[i] = true;
                queue.push([i, cnt+1])
            }

        }
    }
    return -1;
}
console.log(bfs());