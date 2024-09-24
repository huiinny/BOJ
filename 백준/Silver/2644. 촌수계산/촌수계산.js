const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/hjara/js/example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);  
const [start, goal] = input[1].split(" ").map(Number);  
const m = parseInt(input[2]);  // 부모 자식 관계의 개수

let graph = Array.from(Array(n + 1), () => []); 
let visited = Array(n + 1).fill(false); //노드 1부터 시작

for(let i =3; i<3+m; i++) {
    let [x, y]=input[i].split(" ").map(Number);
    graph[x].push(y);
    graph[y].push(x); //양방향 연결
}

let result = -1;

function dfs(current, depth) {
    if (current === goal) {
        result = depth;
        return;
    }

    visited[current] = true;

    for (let next of graph[current]) {
        if (!visited[next]) {
            dfs(next, depth + 1);
        }
    }
}

dfs(start, 0);
console.log(result);