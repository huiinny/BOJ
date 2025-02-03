const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/Users/project/BOJ/example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
const stone =input[1].split(" ").map(Number);
const [a, b] = input[2].split(" ").map(Number);

//console.log(n, stone, a, b);

let queue = [[a, 0]];  // (현재 위치, 점프 횟수)
let visited = new Array(n + 1).fill(false);
visited[a] = true;  

while (queue.length > 0) {
    let [current, cnt] = queue.shift();  // 현재 위치와 점프 횟수

    if (current === b) {
        console.log(cnt);
        return;
    }

    let jump = stone[current-1]; // 이동 가능한 점프

    for (let next = current+jump; next<=n; next=next+jump) {
        if (!visited[next]) {
            queue.push([next, cnt+1]);
            visited[next] = true;
        }
    }
    for (let next = current-jump; next>0; next=next-jump) {
        if (!visited[next]) {
            queue.push([next, cnt+1]);
            visited[next] = true;
        }
    }

}
console.log(-1);