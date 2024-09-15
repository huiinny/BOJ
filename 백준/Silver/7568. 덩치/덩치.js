const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/hjara/js/example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();

let mem = input.map(line => {
    let [weight, hegiht] = line.split(" ").map(Number);
    return [weight, hegiht, 1];
});


for(let i=0; i<mem.length; i++) {
    for(let j=0; j<mem.length; j++) {
        if (i !== j) {  
            if (mem[i][0] < mem[j][0] && mem[i][1] < mem[j][1]) {
                mem[i][2]++;
            }
        }
    }
}
console.log(mem.map(mem => mem[2]).join(' '));