const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'C:/Users/hjara/js/example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const k = parseInt(input[0]);
const inequality = input[1].split(' ');

//console.log(inequality);
let max = String(Number.MIN_SAFE_INTEGER); 
let min = String(Number.MAX_SAFE_INTEGER);
let visited = Array(10).fill(false); 

function sort(str, cnt) {
    if(cnt === k+1) {
        if (parseInt(str) > parseInt(max)) max = str;  // 최댓값 갱신
        if (parseInt(str) < parseInt(min)) min = str; // 최솟값 갱신
        return;
    }
    for (let i = 0; i < 10; i++) {
        if (!visited[i]) {  // 아직 선택되지 않은 숫자만
            if (cnt === 0 ||  // 첫 번째 숫자는 무조건 선택 가능
                (inequality[cnt - 1] === '<' && str[cnt - 1] < i.toString()) ||  // 부등호가 <일 때, 이전 숫자< 현재 숫자
                (inequality[cnt - 1] === '>' && str[cnt - 1] > i.toString())) {  // 부등호가 >일 때, 이전 숫자> 현재 숫자
                visited[i] = true;  // 숫자 i를 사용 중으로 표시
                sort(str + i, cnt + 1);  // 다음 자리로 이동
                visited[i] = false;  // 숫자를 다시 사용할 수 있도록 해제
            }
            
        }
    }
}

for (let i=0; i <10; i++) { //처음 숫자 설정
    visited[i]=true;
    sort(i.toString(), 1);
    visited[i]=false;
}

console.log(max); 
console.log(min); 