const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'C:/Users/hjara/js/example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
const map = input.slice(1).map(line => line.trim().split(''));

//console.log(map);

const direction = [ 
    [1, 0], //하 y가 증가
    [0, 1] //우 x가 증가
];

function Candy () {
    let maxcandy =1;
    // 가로에서 사탕갯수 세기
    for (let i=0; i<n; i++) {
        let count = 1;
        for (let j=1; j<n; j++) {
            if (map[i][j]===map[i][j-1]) {
                count++;
            }
            else {
                maxcandy = Math.max(maxcandy, count);
                count = 1; // count reset: 다른 사탕 검사
            }
        }
        maxcandy = Math.max(maxcandy, count); // count reset: 다른 행 검사
    }
    // 세로에서 사탕갯수 세기
    for (let i=0; i<n; i++) {
        let count = 1;
        for (let j=1; j<n; j++) {
            if (map[j][i]===map[j-1][i]) {
                count++;
            }
            else {
                maxcandy = Math.max(maxcandy, count);
                count = 1; // count reset: 다른 사탕 검사
            }
        }
        maxcandy = Math.max(maxcandy, count); // count reset: 다른 행 검사
    }
    return maxcandy;
}

let maxcandy=1;

for (let i=0; i<n; i++) {
    for (let j=0; j<n-1; j++) {
        [map[i][j], map[i][j+1]] = [map[i][j+1], map[i][j]];
        maxcandy = Math.max(maxcandy, Candy());
        [map[i][j], map[i][j + 1]] = [map[i][j + 1], map[i][j]];
    }
}

for (let i=0; i<n-1; i++) {
    for (let j=0; j<n; j++) {
        [map[i][j], map[i+1][j]] = [map[i+1][j], map[i][j]];
        maxcandy = Math.max(maxcandy, Candy());
        [map[i][j], map[i+1][j]] = [map[i+1][j], map[i][j]];
    }
}

//console.log(map);
console.log(maxcandy);