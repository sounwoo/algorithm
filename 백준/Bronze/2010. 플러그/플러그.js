const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const [N, ...arr] = input;
    const result = arr.reduce((acc, cur) => +acc + +cur, 0);
    console.log(result - (N - 1));
}

solution();
