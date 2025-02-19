const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/Users/project/BOJ/example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [A, K] = input[0].split(" ").map(Number);

function cal(A, K) {
    const dp = Array(K + 1).fill(Infinity); // 연산 횟수를 저장하는 dp 배열

    dp[A] = 0; // A에서 A를 만드는 연산 횟수는 0 (초기값)

    for (let i = A + 1; i <= K; i++) {
        if ( i % 2 != 0) {
            dp[i] = dp[i - 1] + 1; // 1을 더하는 경우
        }
        if (i % 2 === 0) {
            dp[i] = Math.min(dp[i - 1] + 1, dp[i / 2] + 1); // 2배 연산을 사용하는 경우
        }
    }
    
    return dp[K]; // K를 만드는 최소 연산 횟수 반환
}

console.log(cal(A, K));