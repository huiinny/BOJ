const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/hjara/js/example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);  // 사람 수
let final = -1;
let winner = 0;  

for (let i = 1; i <= n; i++) {
    const cards = input[i].split(" ").map(Number);
    let max = 0;

    for (let x = 0; x < 5; x++) {
        for (let y = x + 1; y < 5; y++) {
            for (let z = y + 1; z < 5; z++) {
                const sum = cards[x] + cards[y] + cards[z];
                const remainder = sum % 10;
                max = Math.max(max, remainder);
            }
        }
    }

    if (max > final || (max === final && i > winner)) {
        final = max;
        winner = i;
    }
}

console.log(winner);
