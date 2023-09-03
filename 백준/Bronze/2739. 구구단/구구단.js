const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    for (let i = 0; i < 9; i++) {
        console.log(`${input[0]} * ${i + 1} = ${(i + 1) * input[0]}`);
    }
}

solution();
