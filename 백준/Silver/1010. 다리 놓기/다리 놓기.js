const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/hjara/js/example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let T =  parseInt(input[0]);
let index = 1;
//console.log(input);

for (let i = 0; i < T; i++) {
    let [n, m] = input[index].split(" ").map(Number);
    console.log(site(n, m));
    index++;
}


function site (n, m) {
    if (n === 1) {
        return m;
    }

    if (n === m) {
        return 1;
    }

    if(m === 1) {
        return 0;
    }

    let arr = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));

     // 서쪽에 1개 사이트만 있을 때 (arr[1][i]는 i로 초기화)
     for (let i = 1; i <= m; i++) {
        arr[1][i] = i;
    }

    // 동쪽에 1개 사이트만 있을 때 (arr[i][1]은 0으로 초기화)
    // i=1일 때는 경우의 수가 1이기 때문에 i=2부터 시작한다.
    for (let i = 2; i <= n; i++) {
        arr[i][1] = 0;
    }

    for(let i=2; i<n+1; i++) {
        for(let j = i; j<m+1; j++) {
            arr[i][j]=arr[i][j-1]+arr[i-1][j-1]
        }
    }

    return arr[n][m];
}