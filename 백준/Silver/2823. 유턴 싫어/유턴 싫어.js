const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'C:/Users/hjara/js/example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [r, c] = input[0].split(" ").map(Number);
const map = [];
let flag = false;

for (let i = 1; i <= r; i++) {
    map.push(input[i].trim().split(""));  // 각 줄을 문자 배열로 변환해 2차원 배열에 저장
}

const direction = [ 
    [-1, 0], //상 y가 감소
    [0, 1], //우 x가 증가
    [1, 0], //하 y가 증가
    [0, -1] //좌 x가 감소
];

//console.log(map);

function bfs (x, y) {
    let cnt =0;

    for (let i=0; i<4; i++) {

        let nrow=x+direction[i][0];
        let ncol=y+direction[i][1];

        if (nrow<0 || nrow >=r || ncol<0 || ncol>=c || map[nrow][ncol] === 'X') {
            continue;
        }

        else if (map[nrow][ncol]==='.') {
            cnt++;
        }
            
    }

    if (cnt <= 1) {
        flag = true;
        console.log(1);  // 막다른 길이 있으면 1 출력하고 종료
        return;  // 프로그램 종료
    }
    
}

for (let i=0; i<r; i++) {
    for (let j=0; j<c; j++) {
        if( map[i][j]==='.')
            bfs(i, j); 
            if (flag) break;
    }
    if (flag) break;
}

// 막다른 길이 없으면 0 출력
if (!flag) console.log(0);