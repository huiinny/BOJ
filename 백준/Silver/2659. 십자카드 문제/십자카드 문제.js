const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'C:/Users/hjara/js/example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const arr=[];
for (let i=0; i<4; i++) {
    let tmp = +input.join("");
    arr.push(tmp);
    input.push(input.shift());
}
//console.log(arr);
const minInput = Math.min(...arr);

let cnt=0;
const uniqueClockNums = new Set();

for (let i=1111; i<10000; i++) { 
    const digit = i.toString().split("");
    
    if (digit.includes('0')) continue;
    
    let clockNum = digit.map(Number);
    const arrI = [];
    
    for(let j=0; j<4; j++) {
        let tmpI = +clockNum.join("");
        arrI.push(tmpI);
        clockNum.push(clockNum.shift());
    }
    //console.log(arrI);
    const currclockNum = Math.min(...arrI);
    
    // 중복된 시계수는 추가하지 않음
    if (!uniqueClockNums.has(currclockNum)) {
        uniqueClockNums.add(currclockNum);
        cnt++;
    }
    //console.log(uniqueClockNums);
    // 입력된 시계수와 동일한 시계수일 때
    if (currclockNum === minInput) {
        console.log(cnt);  // 시계수가 몇 번째인지 출력
        break;
    }
        
    
}