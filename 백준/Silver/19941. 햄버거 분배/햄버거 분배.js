const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'C:/Users/hjara/js/example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split('');
let cnt = 0;

for (let i=0; i<n; i++) {
    if(arr[i] === 'P') {
        for (let j=i-k; j<=i+k; j++) {
            if(arr[j] === 'H') {
                arr[j] = 0;
                cnt++;
                break;
            }
        }
    }
}
console.log(cnt);