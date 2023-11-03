const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const [N, ...arr] = input;
    console.log(arr.sort((a, b) => +a - +b).join('\n'));
}

solution();
