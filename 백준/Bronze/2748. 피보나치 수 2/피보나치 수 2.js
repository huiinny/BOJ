const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/hjara/js/example.txt";
let input = fs.readFileSync(filePath).toString().trim();
var n = parseInt(input);

let arr = [BigInt(0), BigInt(1)];

for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
}

console.log(arr[n].toString());
