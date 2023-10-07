const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const [T, ...arr] = input;
    const result = [];
    arr.forEach((el) => (el === '0' ? result.pop() : result.push(el)));

    console.log(result.length ? result.reduce((acc, cur) => acc + +cur, 0) : '0');
}

solution();
