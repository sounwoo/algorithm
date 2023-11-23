const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution(data) {
    const temp = data[0].split('').reverse().join('');
    console.log(temp === data[0] ? 1 : 0);
}

solution(input);
