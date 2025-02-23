const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/Users/project/BOJ/example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
const option = input.slice(1).map(line => line.split(" "));

const key = new Set();
const result = [];

for (let i = 0 ; i < N; i++) {
    let flag = false;

    for (let j = 0; j < option[i].length; j++) { // 옵션
        let first = option[i][j][0].toUpperCase();; // 옵션의 첫 단어의 첫 문자

        if (!key.has(first)) { // key 배열에 없다면 추가
            key.add(first);
            option[i][j] = `[${option[i][j][0]}]${option[i][j].slice(1)}`;
            flag = true;
            break;
        }
    } 

    if (!flag) {
        for (let j = 0; j< option[i].length; j++) { // 옵션
            for (let k = 0; k < option[i][j].length; k++) { // 한 단어

                let cha = option[i][j][k].toUpperCase();

                if (!key.has(cha)) { // key 배열에 없다면 추가
                    key.add(cha);
                    option[i][j] = option[i][j].slice(0, k) + `[${option[i][j][k]}]`+ option[i][j].slice(k + 1);;
                    flag = true;
                    break;
                }

            }
            if(flag) break;
        }
    }
    console.log(option[i].join(" "));
    
}

