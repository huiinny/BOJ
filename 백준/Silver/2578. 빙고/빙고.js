const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/hjara/js/example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(line => line.split(" ").map(Number));

//console.log(input);
let bingo = input.slice(0, 5);
let answer = input.slice(5, 10).flat();
let markedBingo = Array.from(Array(5), () => Array(5).fill(false));

function checkBingo() {
    let line =0;
    //가로 확인
    for(let i=0; i<5; i++) {
        if (markedBingo[i].every(v => v)) line++;
    }
    //세로 확인
    for(let j=0; j<5; j++) {
        let column = true;
        for(let i=0; i<5; i++) {
            if(!markedBingo[i][j]) {
                column = false;
                break;
            }
        }
        if(column) line++;
    }
    //대각선 확인 (좌상에서 우하)
    if (markedBingo[0][0] && markedBingo[1][1] && markedBingo[2][2] && markedBingo[3][3] && markedBingo[4][4]) line++;
    
    // 대각선 체크 (우상에서 좌하)
    if (markedBingo[0][4] && markedBingo[1][3] && markedBingo[2][2] && markedBingo[3][1] && markedBingo[4][0]) line++;
    return line;
}

for (let index = 0; index < answer.length; index++) {
    let num = answer[index];

    // 빙고판에서 해당 숫자 찾기
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (bingo[i][j] === num) {
                markedBingo[i][j] = true;  // 숫자를 맞춤
                break;
            }
        }
    }

    let sayBingo = checkBingo();

    if(sayBingo >= 3) {
        console.log(index+1);
        break;
    }
}