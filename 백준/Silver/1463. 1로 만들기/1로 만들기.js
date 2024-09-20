const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/hjara/js/example.txt";
let input = parseInt(fs.readFileSync(filePath).toString().trim(), 10);

//console.log(input);

let dp = Array.from({ length: input + 1 }, () => 0);

//dp[1]=0번이므로 i=2부터 시작
for (let i = 2; i <= input; i++) {
    dp[i] = dp[i - 1] + 1;  // 1을 뺀 경우
    
    if (i % 3 === 0) {
        dp[i] = Math.min(dp[i], dp[i / 3] + 1);  // 3으로 나누어 떨어질 때
    }
    
    if (i % 2 === 0) {
        dp[i] = Math.min(dp[i], dp[i / 2] + 1);  // 2로 나누어 떨어질 때
    }
}

console.log(dp[input]);