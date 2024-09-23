const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/hjara/js/example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let graph = Array.from(Array(n + 1), () => []); 
let visited = Array(n+1).fill(false); //노드 1부터 시작
let cnt=0;

for (let i = 1; i <= m; i++) {
    let [u, v] = input[i].split(" ").map(Number);
    graph[u].push(v); //u 노드와 이어진 v노드 저장
    graph[v].push(u);  //v 노드와 연결된 u노드 저장
}

//console.log(graph);

function dfs (current) {
    visited[current]=true;
    for (let next of graph[current]) {
        if(!visited[next]) {
            dfs(next);
        }
    }
}

for (let i = 1; i <= n; i++) {
    if(!visited[i]) {
        dfs(i);
        cnt++;
    }
}

console.log(cnt);