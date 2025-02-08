const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/Users/project/BOJ/example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");


const [n, m] = input[0].split(" ").map(Number);
const graph = input.slice(1).map(line => line.split(" ").map(Number));
const dp = Array.from({ length: n }, () => Array(m).fill(0));


for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        let left = j > 0 ? dp[i][j - 1] : 0;
        let up = i > 0 ? dp[i - 1][j] : 0;

        dp[i][j] = Math.max(left, up) + graph[i][j];
    }
}


console.log(dp[n - 1][m - 1]);
