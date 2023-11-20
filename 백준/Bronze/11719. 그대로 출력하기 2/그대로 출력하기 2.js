const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString();

function solution(data) {
    console.log(data);
}

solution(input);
