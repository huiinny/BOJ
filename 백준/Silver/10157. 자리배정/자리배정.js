const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'C:/Users/hjara/js/example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [c, r] = input[0].split(" ").map(Number); 
const k = +input[1];

const arr = Array.from({length: r}, () => Array(c).fill(0));

const direction = [ 
    [-1, 0], //상 y가 감소
    [0, 1], //우 x가 증가
    [1, 0], //하 y가 증가
    [0, -1] //좌 x가 감소
];

let seatNum = 1;
let x=r-1, y=0, d=0; //맨 왼쪽 하단부터 시작

if (k> c*r) {
    console.log(0);
    return;
}

while (seatNum <= c*r) {
    arr[x][y] = seatNum;

    if (seatNum === k) {
        console.log(`${y+1} ${r-x}`);
        break;
    }

    
    seatNum++;

    let nx = x+direction[d][0]; //열
    let ny = y+direction[d][1]; //행

    if (nx<0 || nx>=r || ny<0 || ny>=c || arr[nx][ny] !== 0) {
        d = (d+1) % 4; //방향 전환 1,2,3,0으로 순환된다
        nx = x+direction[d][0];
        ny = y+direction[d][1];
        
    }

    x = nx;
    y = ny;
    
   
}
