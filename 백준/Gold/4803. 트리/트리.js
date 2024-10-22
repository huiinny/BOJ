const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'C:/Users/hjara/js/example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let testCase=1;
let idx=0;
let visited;
let graph;

while(true) {
    const [n, m] = input[idx].split(" ").map(Number);
    idx += 1;

    if (n===0 && m===0) break;

    graph = Array.from(Array(n+1), () => []);
    visited = Array(n+1).fill(0);
    
    let tree=0;

    for (let i=0; i<m; i++) {
        const [a, b] = input[idx].split(" ").map(Number);
        graph[a].push(b);
        graph[b].push(a);
        idx++;
    }

    for(let i=1; i<=n; i++) {
        if(!visited[i]) {
            if(dfs(i, 0)) tree++;
        }
    }

     // 결과 출력
    if (tree === 0) {
        console.log(`Case ${testCase}: No trees.`);
    } else if (tree === 1) {
        console.log(`Case ${testCase}: There is one tree.`);
    } else {
        console.log(`Case ${testCase}: A forest of ${tree} trees.`);
    }

    testCase++; // 테스트 케이스 번호 증가
}

function dfs(node, parents) {
    visited[node]=true;

    for(let child of graph[node]) {
        if(!visited[child]) {
            if (!dfs(child, node)) {
                return false; // 사이클 발견 시 false 반환
            }
        }
        else if (child !== parents) {
                return false; // 부모노드 제외하고 이미 방문->사이클
        }
    }
    return true;
}

