const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const [_, arr, N] = input;
    let result = 0;
    arr.split(' ').forEach((el) => el === N && ++result);
    console.log(result);
}

solution();
