const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "C:/Users/hjara/js/example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [h, w] = input[0].split(" ").map(Number);
const n = parseInt(input[1]);
const sticker = input.slice(2).map(line=>line.split(" ").map(Number));
let stickerArea = 0;
// console.log(h, w, n);
//console.log(sticker);
for (let i=0; i<n; i++) {
    for(let j=i+1; j<n; j++) {
        const [r1, c1] = sticker[i]; //전
        const [r2, c2] = sticker[j]; //후

        const cases = [
            [r1, c1, r2, c2],  // 둘 다 회전 안 한 상태
            [c1, r1, r2, c2],  // 스티커 1만 회전
            [r1, c1, c2, r2],  // 스티커 2만 회전
            [c1, r1, c2, r2],  // 둘 다 회전한 상태
        ]
        for (let [r1, c1, r2, c2] of cases) {

            if (Math.max(r1, r2) <= h && c1+c2 <=w) {
                stickerArea = Math.max(stickerArea, r1*c1 + r2*c2);
            }
            
            if (Math.max(c1, c2) <= w && r1+r2 <=h) {
                stickerArea = Math.max(stickerArea, r1*c1 + r2*c2);
            }
        }
    }
}
console.log(stickerArea);