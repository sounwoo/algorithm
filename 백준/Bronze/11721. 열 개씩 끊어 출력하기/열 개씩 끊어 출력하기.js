const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    for (let i = 0; i <= input[0].length; i += 10) {
        console.log(input[0].slice(i, i + 10));
    }
}

solution();
