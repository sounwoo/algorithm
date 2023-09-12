const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    let result = '';

    for (let i = 1; i <= input[0]; i++) {
        result += i + '\n';
    }
    console.log(result);
}

solution();
