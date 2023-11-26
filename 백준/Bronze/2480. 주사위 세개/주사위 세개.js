const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim();

function solution(data) {
    const [a, b, c] = data
        .split(' ')
        .map(Number)
        .sort((a, b) => a - b);

    if (a === b && b === c) {
        console.log(10000 + a * 1000);
    } else if (a === b || b === c) {
        console.log(1000 + b * 100);
    } else {
        console.log(c * 100);
    }
}

solution(input);
