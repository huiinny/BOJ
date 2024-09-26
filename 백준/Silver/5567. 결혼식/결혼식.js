const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/hjara/js/example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = parseInt(input[0]);
let m = parseInt(input[1]);
let graph = Array.from(Array(n + 1), () => []);
let visited = Array(n + 1).fill(false);
let cnt = 0;

for (let i = 2; i < 2 + m; i++) {
    let [u, v] = input[i].split(" ").map(Number);
    graph[u].push(v);
    graph[v].push(u);
}

function bfs(start) {
    let queue = [[start, 0]];
    visited[start] = true;

    while (queue.length > 0) {
        let [current, depth] = queue.shift();

        if (depth >= 2) continue;

        for (let next of graph[current]) {
            if (!visited[next]) {
                visited[next] = true;
                cnt++;
                queue.push([next, depth + 1]);
            }
        }
    }
}

bfs(1);

console.log(cnt);
