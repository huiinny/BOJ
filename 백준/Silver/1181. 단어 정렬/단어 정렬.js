const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/hjara/js/example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();
const arr = Array.from(new Set(input));

//console.log(arr);

arr.sort((a, b) => {
    if (a.length === b.length) {
        return a.localeCompare(b);
    }
    return a.length-b.length;
})

console.log(arr.join('\n'));