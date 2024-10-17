const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'C:/Users/hjara/js/example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0]; 
const r = +input[1];
const student = input[2].split(" ").map(Number);

let picture = [];

for (let i=0; i<student.length; i++) {

    let curr = student[i];  // 현재 추천받은 학생 번호

    // 사진틀에 해당 학생이 있는지 확인
    let found = picture.find(p => p.student === curr);

    if (found) {
        // 이미 사진틀에 있는 경우 추천 횟수만 증가
        found.count++;
    } 
    else {
        if (picture.length===n) {
            let minIndex = 0;
            for (let j = 1; j < picture.length; j++) {
                // 1. 추천 횟수가 더 적은 경우
                if (picture[j].count < picture[minIndex].count) {
                    minIndex = j;
                }
                // 2. 추천 횟수가 같을 때 더 오래된 학생을 선택
                else if (picture[j].count === picture[minIndex].count && picture[j].order < picture[minIndex].order) {
                    minIndex = j;
                }
            }
            picture.splice(minIndex, 1);
        }
        picture.push({student: curr, count: 1, order: i+n});
    }
}
let finalStudent = picture.map(p=>p.student).sort((a, b)=>a-b);

console.log(finalStudent.join(" "));