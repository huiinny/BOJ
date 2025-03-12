const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/Users/project/BOJ/example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, d, k, c] = input[0].split(" ").map(Number);
const sushi = input.slice(1).map(Number);

let maxCnt = 0;
let sushiMap = new Map();

// 1️⃣ 초기 `k`개 슬라이딩 윈도우 설정
for (let i = 0; i < k; i++) {
    sushiMap.set(sushi[i], (sushiMap.get(sushi[i]) ?? 0) + 1);
}

// 2️⃣ 초기 상태에서 쿠폰 초밥 확인
let cnt = sushiMap.size;
if (!sushiMap.has(c)) cnt++; // 쿠폰 초밥이 없으면 추가
maxCnt = cnt;

// 3️⃣ 슬라이딩 윈도우 실행
for (let i = 0; i < N; i++) {
    let removeIdx = i;         // 제거할 초밥 (윈도우의 맨 앞)
    let addIdx = (i + k) % N;  // 새로 추가할 초밥 (원형 큐 처리)

    // 🟢 기존 초밥 제거
    if (sushiMap.get(sushi[removeIdx]) === 1) {
        sushiMap.delete(sushi[removeIdx]); // 마지막 1개라면 삭제
    } else {
        sushiMap.set(sushi[removeIdx], sushiMap.get(sushi[removeIdx]) - 1);
    }

    // 🔵 새로운 초밥 추가
    sushiMap.set(sushi[addIdx], (sushiMap.get(sushi[addIdx]) ?? 0) + 1);

    // 🍣 현재 초밥 종류 개수 확인
    cnt = sushiMap.size;
    if (!sushiMap.has(c)) cnt++; // 쿠폰 초밥이 없으면 추가

    // ✅ 최대 초밥 종류 개수 갱신
    maxCnt = Math.max(maxCnt, cnt);
}

console.log(maxCnt);