const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/Users/project/BOJ/example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = input[0].split(" ").map(Number);
const dp = Array.from({ length: n }, () => Array(3).fill(0)); 
const arr = input.slice(1).map(line => line.split(" ").map(Number)); 

dp[0] = arr[0];

for (let i=1; i<n; i++) {
    dp[i][0] = Math.min(dp[i-1][1], dp[i-1][2]) + arr[i][0]
    dp[i][1] = Math.min(dp[i-1][0], dp[i-1][2]) + arr[i][1]
    dp[i][2] = Math.min(dp[i-1][0], dp[i-1][1]) + arr[i][2] 
}

console.log(Math.min(...dp[n-1]));