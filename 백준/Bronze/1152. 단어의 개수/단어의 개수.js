const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const result = input[0].split(' ');
    const langth = result.length;

    console.log(result[0] === '' || result[langth - 1] === '' ? langth - 1 : langth);
}

solution();
