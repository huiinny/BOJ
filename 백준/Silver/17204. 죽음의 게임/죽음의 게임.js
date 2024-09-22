const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/hjara/js/example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, K] = input[0].split(" ").map(Number);
let graph = input.slice(1).map(Number);
let visited = Array(N).fill(false);

let stack = [];
stack.push(0);
visited[0] = true;

let count = 0;

while (stack.length > 0) {
    let current = stack.pop();

    if (current === K) {
        console.log(count);
        return;
    }

    let next = graph[current];

    if (!visited[next]) {
        visited[next] = true;
        stack.push(next);
        count++;
    }
}

console.log(-1);
