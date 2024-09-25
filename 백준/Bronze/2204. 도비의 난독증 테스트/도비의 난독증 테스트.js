const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/hjara/js/example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

for(let i=0; i< input.length;) {
    let t = parseInt(input[i]); //테스트 케이스 별 단어 개수
    if(t===0) break;

    let word = input.slice(i + 1, i + 1 + t);
    word.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    console.log(word[0]);
    i += t + 1;
}