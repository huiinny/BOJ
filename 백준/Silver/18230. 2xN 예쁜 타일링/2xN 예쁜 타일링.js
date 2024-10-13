const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'C:/Users/hjara/js/example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = parseInt(input[0]); 
const one = input[1].split(" ").map(Number).sort((a, b) => a - b);
const two = input[2].split(" ").map(Number).sort((a, b) => a - b);

let sum = 0;

while (n > 0) {

    if (n % 2 === 1) { //홀수
        if (one.length > 0) {
            sum += one.pop();
        }
        n--;
    }
    else {
        let t1 = 0, t2 = 0;

        // 1타일 두 개의 합 구하기
        if (one.length >= 2) {
            t1 = one[one.length - 1] + one[one.length - 2]; // 가장 큰 1타일 2개 합
        }

        // 2타일의 값 구하기
        if (two.length >= 1) {
            t2 = two[two.length - 1]; // 가장 큰 2타일 값
        }

        // 1타일 2개의 합이 더 크면 1타일 2개 사용
        if (t1 > t2) {
            sum += t1;
            one.pop(); one.pop(); // 사용한 1타일 제거
        } else {
            // 2타일이 더 크면 2타일 사용
            sum += t2;
            two.pop(); // 사용한 2타일 제거
        }
        n -= 2; // 두 타일을 사용했으므로 공간 2 감소
    }
}
console.log(sum);