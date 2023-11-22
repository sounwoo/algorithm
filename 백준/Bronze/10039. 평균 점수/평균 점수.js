const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);
function solution(data) {
    let sum = 0;
    data.forEach((el) => (sum += el > 40 ? el : 40));

    console.log(sum / data.length);
}

solution(input);
