const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/hjara/js/example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let T =  parseInt(input[0]);
let index = 1;

for(let i = 0; i < T; i++) {
    let N = parseInt(input[index]);
    let arr = input[index + 1].split(" ").map(Number);
    let visited = Array(N + 1).fill(false);
    let cnt = 0;

    for(let i = 1; i < N+1 ; i++) {
        if(!visited[i]) {
            let current = i;
            while (!visited[current]) {
                visited[current] = true;
                current = arr[current - 1];
            }
            cnt++;
        }
    }
    console.log(cnt);
    index += 2;
}
