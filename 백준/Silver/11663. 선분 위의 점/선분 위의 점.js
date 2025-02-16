const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/Users/project/BOJ/example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const points = input[1].split(" ").map(Number);
const ranges = input.slice(2, 2 + M).map(line => line.split(" ").map(Number));

console.log(count(points, ranges).join('\n'));

function lowerBound(arr, start) {
    let left = 0;
    let right = arr.length;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] < start) left = mid + 1;
        else right = mid;
    }
    return left;
}

function upperBound(arr, end) {
    let left = 0;
    let right = arr.length;
    while (left< right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] <= end) left = mid + 1;
        else right = mid;
    }
    return left;
}

function count(points, ranges) {
    points.sort((a, b) => a - b);
    let res = [];
    
    for (let [start, end] of ranges) {
        let left = lowerBound(points, start);
        let right = upperBound(points, end);
        res.push(right - left);
    }
    return res;
}