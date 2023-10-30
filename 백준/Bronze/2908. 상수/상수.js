const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const [A, B] = input[0].split(' ');
    console.log(
        Math.max(+A.split('').reverse().join(''), +B.split('').reverse().join(''))
    );
}

solution();
