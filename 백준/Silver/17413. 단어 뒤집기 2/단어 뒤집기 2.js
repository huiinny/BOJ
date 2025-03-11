const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/Users/project/BOJ/example.txt';
const input = fs.readFileSync(filePath).toString().trim();

function reverse(str) {
    let result= "";
    let temp = "";
    let flag = false;

    for (let char of str) {

        if (char === "<") {
            result += temp.split("").reverse().join("");
            temp = "";
            flag = true;
            result += char;
        }
        else if (char === '>') {
            flag = false;
            result += char;
        }
        else if (flag) {
            result += char;
        }
        else if (char === " ") {
            result += temp.split("").reverse().join("") + " ";
            temp = "";  // temp 초기화
        }
        else {
            temp += char;
            
        }
    }
    
    result += temp.split("").reverse().join("");
    return result
}

console.log(reverse(input));

