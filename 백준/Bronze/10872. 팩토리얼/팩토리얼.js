const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    let result = 1;
    Array(+input[0])
        .fill(0)
        .forEach((_, index) => (result *= ++index));
    console.log(result);
}

solution();
