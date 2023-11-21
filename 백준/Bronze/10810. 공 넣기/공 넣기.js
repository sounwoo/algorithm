const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n')
    .map((x) => x.split(' ').map(Number));
function solution(data) {
    const [[n, m], ..._data] = data;

    let arr = Array(n).fill(0);
    for (let [i, j, k] of _data) {
        for (let idx = i - 1; idx < j; idx++) {
            arr[idx] = k;
        }
    }
    console.log(arr.join(' '));
}

solution(input);
