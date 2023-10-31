const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    console.log(
        input[0]
            .split('')
            .sort((a, b) => +b - +a)
            .join('')
    );
}

solution();
