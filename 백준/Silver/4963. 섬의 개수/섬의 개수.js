const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/Users/project/BOJ/example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let index = 0;
const direction = [
    [-1, -1], [-1, 0], [-1, 1], // 좌상, 상, 우상
    [0, -1],         [0, 1],    // 좌, 우
    [1, -1],  [1, 0],  [1, 1]   // 좌하, 하, 우하
];

while (index < input.length) {
    let [w, h] = input[index].split(" ").map(Number); // w, h 저장 
    if (w === 0 && h === 0) break; // 입력 종료
    index++; // 지도 저장하기

    let map = [];
    for (let i=0; i<h; i++) {
        map.push(input[index].split(" ").map(Number));
        index++;
    }

    let count = 0;
    for (let i=0; i<h; i++) { // 행
        for (let j=0; j<w; j++) { // 열
            if (map[i][j] === 1) {
                bfs(map, i, j, w, h);
                count++;
            }
        }
    }

    console.log(count);
}

function bfs(map, i, j, w, h) {
    let queue = [[i, j]];
    map[i][j]=0;

    while (queue.length) {
        let [x, y] = queue.shift();

        for (let [dx, dy] of direction) {
            let nx = x + dx;
            let ny = y + dy;

            if (nx>=0 && ny>=0 && nx < h && ny <w && map[nx][ny] === 1) {
                map[nx][ny] = 0;
                queue.push([nx, ny]);
            }
        }

    }
}