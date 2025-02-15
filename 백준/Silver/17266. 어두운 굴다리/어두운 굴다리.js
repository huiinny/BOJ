const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/Users/project/BOJ/example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);
const M = parseInt(input[1]);
const position = input[2].split(' ').map(Number);

console.log(minHeight(N, M, position));

function minHeight(N, M, position) {
    let left = 1, right = N;
    
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        
        let covered = 0;
        let possible = true;
        
        for (let pos of position) {
            if (covered < pos - mid) {
                possible = false;
                break;
            }
            covered = pos + mid;
        }
        
        if (covered < N) possible = false;
        
        if (possible) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
}