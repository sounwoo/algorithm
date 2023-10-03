const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const [A, B] = input[0].split(' ');

    console.log((+A + +B) * (+A - +B));
}

solution();
