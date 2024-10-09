const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'C:/Users/hjara/js/example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input.map(line=>line.split(" ").map(Number));
//동 서 남 북 벡터 설정
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

const number = new Set();

function dfs (x, y, string) {
    if(string.length === 6) {
        number.add(string);
        return;
    }

    for (let i=0; i<4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx >= 0 && ny >= 0 && nx < 5 && ny < 5) {
            dfs(nx, ny, string + arr[nx][ny]);
        }
        
    }
}

for (let i=0; i<5; i++) {
    for (let j=0; j<5; j++) {
        dfs(i, j, arr[i][j].toString());
    }
}

console.log(number.size);