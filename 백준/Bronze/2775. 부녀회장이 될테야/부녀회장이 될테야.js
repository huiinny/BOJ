const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

let T = input[0]; // 테스트 케이스 개수
let index = 1;  // 인덱스 초기화

// 각 테스트 케이스 처리
for (let i = 0; i < T; i++) {
    let k = input[index];  // k층
    let n = input[index + 1];  // n호
    console.log(people(k, n));  // 결과 출력
    index += 2;  // 다음 케이스로 넘어가기 위해 2줄 건너뛰기
}

function people(k, n) {
    // k가 0인 경우, 즉 0층이면 n호에 n명이 산다.
    if (k === 0) {
        return n;
    }

    // 2차원 배열 선언 및 초기화 (k층과 n호 배열 생성)
    let arr = Array.from(Array(k + 1), () => Array(n).fill(0));  // k+1층과 n호의 배열

    // 0층 사람 수 초기화 (0층 n호에는 n명이 산다)
    for (let i = 0; i < n; i++) {
        arr[0][i] = i + 1;  // 0층의 n호는 n명이 거주
    }

    // k층 n호 사람 수 계산
    for (let i = 1; i <= k; i++) {
        for (let j = 0; j < n; j++) {
            if (j === 0) {
                arr[i][j] = 1;  // k층 1호는 항상 1명
            } else {
                arr[i][j] = arr[i][j - 1] + arr[i - 1][j];  // k층 n호 = k층 n-1호 + k-1층 n호
            }
        }
    }

    // k층 n호의 사람 수 반환 (n번째 호는 인덱스가 n-1)
    return arr[k][n - 1];
}
