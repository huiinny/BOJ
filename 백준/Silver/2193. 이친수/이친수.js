const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/hjara/js/example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = parseInt(input);
let dp = Array(n+1).fill(0);

dp[1]=BigInt(1);
dp[2]=BigInt(1);

for (let i = 3; i <= n; i++) {
    dp[i] = BigInt(dp[i - 1]) + BigInt(dp[i - 2]);
}

console.log(dp[n].toString()); 