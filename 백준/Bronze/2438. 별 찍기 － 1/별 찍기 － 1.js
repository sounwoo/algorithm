const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    new Array(+input).fill(0).forEach((el, i) => {
        console.log('*'.repeat(i + 1));
    });
}

solution();
