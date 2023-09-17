const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const [M, arr] = input;
    let sum = 0;

    const score = arr.split(' ');
    const max = Math.max(...score);

    score.forEach((el) => (sum += (+el / max) * 100));
    console.log(sum / M);
}

solution();
