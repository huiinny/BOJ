const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'C:/Users/hjara/js/example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m, k, x]= input[0].split(" ").map(Number); 
const graph = Array.from(Array(n+1), () => []);
let visited = Array(n+1).fill(false);
let distance = Array(n + 1).fill(-1);
let answer = [];

for (let i=1; i<=m; i++) {
    let [x, y]=input[i].split(" ").map(Number);
    graph[x].push(y);
    
}

function bfs(node) {
    const queue = [];
    queue.push(node);
    visited[node]=true;
    distance[node]=0;

    while(queue.length) {
        let curr = queue.shift();
        let childs=graph[curr];

        for(let i=0; i<childs.length; i++) {
            let child = childs[i];

            if(!visited[child]) {
                visited[child]=true;
                distance[child]=distance[curr]+1;

                if (distance[child] === k) {
                    answer.push(child); // 거리가 K인 경우 정답 배열에 추가
                    
                }
                queue.push(child); // 큐에 자식 노드 추가
            }
        }
        
    }  
}

bfs(x);


if (answer.length === 0) {
    console.log(-1); // K 거리만큼 떨어진 도시가 없다면 -1 출력
} else {
    answer.sort((a, b) => a - b); // 오름차순 정렬
    console.log(answer.join("\n"));
}