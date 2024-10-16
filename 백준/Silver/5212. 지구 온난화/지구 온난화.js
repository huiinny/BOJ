const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'C:/Users/hjara/js/example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [r, c] = input[0].split(" ").map(Number); 

let map = [];
for (let i = 1; i <= r; i++) {
    map.push(input[i].trim().split(""));  // 각 줄을 문자 배열로 변환해 2차원 배열에 저장
}

const direction = [ 
    [-1, 0], //상 y가 감소
    [0, 1], //우 x가 증가
    [1, 0], //하 y가 증가
    [0, -1] //좌 x가 감소
];


const check = Array.from({length: r}, () => Array(c).fill(0));

function bfs (x, y) {
    
    let cnt=0;

    for (let i=0; i<4; i++) {

        let nrow=x+direction[i][0];
        let ncol=y+direction[i][1];
    
        if (nrow<0 || nrow >=r || ncol<0 || ncol>=c || map[nrow][ncol] === '.') {
            cnt++;
        }
    }

    if (cnt>=3) {
        check[x][y] =true;
    }

     
}


for (let i=0; i<r; i++) {
    for (let j=0; j<c; j++) {
        if(map[i][j]==='X') {
            bfs(i, j);
            
        }
    }
}

// 바다로 변환
for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
        if (check[i][j]) {
            map[i][j] = '.'; // 바다로 변환
        }
    }
}

let startX = r, startY = c, finalX = 0, finalY = 0;

for (let i=0; i<r; i++) {
    for (let j=0; j<c; j++) {
        if(map[i][j]==='X') {
            startX = Math.min(startX, i);  // 가장 작은 row 값
            startY = Math.min(startY, j);  // 가장 작은 col 값
            finalX = Math.max(finalX, i);  // 가장 큰 row 값
            finalY = Math.max(finalY, j);  // 가장 큰 col 값
       
        }    
    }
}

for (let i = startX; i <= finalX; i++) {
    let row = '';  // 한 행을 저장할 문자열
    for (let j = startY; j <= finalY; j++) {
        row += map[i][j];  // 문자를 한 줄로 이어붙임
    }
    console.log(row);  // 한 행을 출력하고 줄바꿈
}

