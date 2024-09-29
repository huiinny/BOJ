const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/hjara/js/example.txt";
let input = fs.readFileSync(filePath).toString().trim().split(' ');  // 공백으로 구분된 두 값 받기

const n = parseInt(input[0]);  // n: 사람 수
const k = parseInt(input[1]);  // k: k번째 사람 제거

let answer = [];
let arr = Array.from({ length: n }, (v, i) => i + 1);  // 1부터 n까지 배열 생성
let index = 0;

// 요세푸스 순열 계산
while (arr.length > 0) {
    index = (index + k - 1) % arr.length;  // k번째 사람 제거를 위해 원형 인덱스 사용
    answer.push(arr.splice(index, 1)[0]);  // k번째 사람을 배열에서 제거하고 결과에 추가
}

console.log('<' + answer.join(', ') + '>');
