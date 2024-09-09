const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/hjara/js/example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

let result = [];

//console.log("Input received by solution: ", input); 

input.sort((a, b) => {
    return a - b;
});

let sum = input.reduce((a, b) => a + b);

//console.log("\nSum of input array: ", sum);

for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        if (input[i] + input[j] === sum - 100) {
            result = [i, j];
            break;
        }
    }
    if (result.length > 0) break;
}

const output = input.filter((_, index) => index !== result[0] && index !== result[1]);
console.log(output.join('\n'));


