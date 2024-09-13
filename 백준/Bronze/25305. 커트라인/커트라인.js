const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/hjara/js/example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, k] = input[0].split(" ").map(Number);
let mem = input[1].split(" ").map(Number);

//console.log(N, k, mem);

mem.sort((a, b) => {
    return b-a;
})

console.log(mem[k-1]);