const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/hjara/js/example.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let swapped;

do {
    swapped = false;
    for(let i = 0; i < input.length-1; i++) {
        if (input[i] > input[i+1]) {
            let temp= input[i];
            input[i]=input[i+1];
            input[i+1]=temp;
            swapped=true;
            console.log(input.join(" "));
        }
    }
} while(swapped);