const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'C:/Users/hjara/js/example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0]; 

let graph = Array.from(Array(n+1), () => []);
let visited = Array(n+1).fill(0);
let parents = [];

for (let i=1; i<input.length; i++) {
    let [x, y]=input[i].split(" ").map(Number);
    graph[x].push(y);
    graph[y].push(x);
}

function bfs () {
    let queue = [1];
    visited[1]=true;

    while(queue.length) {

        let node = queue.shift();
        let child = graph[node]; // 자식 여러 명

        for (let i=0; i<child.length; i++) {
            let a = child[i]; // 자식 한 명
            if(!visited[a]) {
                visited[a]=true;
                queue.push(a);
                parents[a]=node;
            }
        }
    }
}

bfs();
console.log(parents.slice(2).join("\n"));