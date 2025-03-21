const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/Users/project/BOJ/example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const map = input.slice(1).map(line => line.split(" ").map(Number));

let prevCheese = countCheese(map);
let hour=0;

while (true) {
    const visited = Array.from({ length: n}, () => Array(m).fill(false));
    air(visited, map);
    const cheeseList=findCheese(visited, map);

    for (let [x, y] of cheeseList) {
        map[x][y] = 0;
    }
    
    const currentCheese = countCheese(map);
    hour += 1;

    if (currentCheese === 0) break;
    prevCheese = currentCheese;
}
console.log(hour+"\n"+prevCheese);

function air(visited, map) {
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    const queue = [[0, 0]];
    visited[0][0] = true;

    while(queue.length) {
        const [x, y] = queue.shift();

        for (let i=0; i<4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx>=0 && nx < n && ny>=0 && ny < m && !visited[nx][ny] && map[nx][ny]===0 ) {
                visited[nx][ny] = true;
                queue.push([nx, ny]);
            }
        }
    }
}

function findCheese(visited, map) {
    
    const cheeseList = [];
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    

    for (let i =0; i<n; i++) {
        for (let j=0; j<m; j++) {
            if (map[i][j]===1) {

                for (let d=0; d<4; d++) {
                    const nx = i + dx[d];
                    const ny = j + dy[d];

                    if (map[nx][ny]===0 && visited[nx][ny]) {
                        cheeseList.push([i, j]);
                        break;
                    }

                }
            }
        }
    }
    return cheeseList;
}

function countCheese(map) {
   
    let count=0;
    for (let i=0; i<n; i++) {
        for (let j=0; j<m; j++) {
            
            if (map[i][j]===1) {
                count++;
            };
        }
    }
    return count;
}

