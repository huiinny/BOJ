const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/hjara/js/example.txt";
let input = fs.readFileSync(filePath).toString().trim();

// 각 문자의 등장 횟수를 저장하는 객체
let charCount = {};

for (let char of input) {
    if (!charCount[char]) {   // 만약 charCount[char]가 존재하지 않으면
        charCount[char] = 0;  // 0으로 초기화
    }
    charCount[char] += 1;     // 등장 횟수 1 증가
}

let oddCount = 0;
let oddChar = '';
let front = '';
let mid = '';
let back = '';

// 홀수 개의 문자가 몇 개 있는지 확인
for (let char in charCount) {
    if (charCount[char] % 2 === 1) {
        oddCount++;
        oddChar = char;  // 홀수 개 문자를 기록 (가운데에 넣기 위해)
    }
}

// 홀수 개 문자가 2개 이상이면 팰린드롬 불가능
if (oddCount > 1) {
    console.log("I'm Sorry Hansoo");
} else {
    // 사전순으로 앞덩어리(front) 만들기
    let sortedChars = Object.keys(charCount).sort();  // 문자들을 사전순으로 정렬

    for (let char of sortedChars) {
        let repeat = Math.floor(charCount[char] / 2);  // 절반만큼 넣음
        front += char.repeat(repeat);  // 앞덩어리 생성
    }

    // 중간 문자는 홀수 문자가 있을 경우
    if (oddChar) {
        mid = oddChar;  // 가운데 문자는 홀수 개 문자
    }

    // back은 front의 역순
    back = front.split('').reverse().join('');

    // 최종적으로 앞덩어리 + 중간 + 뒤덩어리 (역순)
    let result = front + mid + back;
    console.log(result);
}
