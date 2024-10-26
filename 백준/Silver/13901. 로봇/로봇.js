const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'C:/Users/hjara/js/example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [r, c] = input[0].split(" ").map(Number);
const k = +input[1];


const [sr, sc] = input[2+k].split(" ").map(Number);
const move = input[3+k].split(" ").map(Number);

const map = Array.from({length: r}, ()=> (Array(c).fill('0')));
const visited = Array.from({length: r}, ()=> (Array(c).fill(0)));

for (let i=0; i<k; i++) {
    const [br, bc]=input[2+i].split(" ").map(Number);
    map[br][bc]='X';
}

//onsole.log(map);

const direction = [ 
    [-1, 0], //상 y가 감소
    [1, 0], //하 y가 증가
    [0, -1], //좌 x가 감소
    [0, 1] //우 x가 증가
];

let d =0;
function bfs (x, y, move) {

    let moveIdx = 0;
    visited[x][y] = true;

    while(true) {
        let moved = false;

        for (let i=0; i<4; i++) {
            
            const d = move[moveIdx]-1;
            let nrow=x+direction[d][0];
            let ncol=y+direction[d][1];

            if (nrow<0 || nrow >=r || ncol<0 || ncol>=c || visited[nrow][ncol] == true || map[nrow][ncol] === 'X') {
                moveIdx= (moveIdx+1)%4
                continue; //방향 바꾸기
            }

            else if (!visited[nrow][ncol]) {
                x = nrow; // 로봇 위치 업데이트
                y = ncol;
                visited[x][y] = true;
                moved = true; // 이동 성공
                break;
            }
        }
        if (!moved) break;
    }
    console.log(x, y);
}  


bfs(sr, sc, move);