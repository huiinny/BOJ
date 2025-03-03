function solution(n, words) {
    let arr = new Set();
    let cnt = 1;
    let pre = "";
    
    while (words.length) {
        for (let i=0; i<n; i++) {
            if (words.length === 0) break;
            
            let w = words.shift();
            if(arr.has(w) || pre && pre.slice(-1) !== w[0] ) {
                return [i + 1, cnt];
            }
            
                arr.add(w);
                pre = w;
        }
        cnt++;
    }
    return [0, 0];
    
}