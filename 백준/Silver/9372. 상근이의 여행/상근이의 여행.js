const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/hjara/js/example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let T = parseInt(input[0]);  // 테스트 케이스 수
let index = 1;

for (let i = 0; i < T; i++) {
    
    let [N, M] = input[index].split(" ").map(Number); //국가수, 비행경로 수
    console.log(N - 1);
    index += M+1; //비행기 경로 M줄을 건너뛰고 다음 테스트케이스로 이동
    
}