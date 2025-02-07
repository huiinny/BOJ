const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/Users/project/BOJ/example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const t = +input[0];

let dp= Array(12).fill(0);
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let n=4; n<11; n++) {
    dp[n] = dp[n-1] + dp[n-2] + dp[n-3];
}

for(let i=1; i<=t; i++) {
    let n = +input[i];
    console.log(dp[n]);
}