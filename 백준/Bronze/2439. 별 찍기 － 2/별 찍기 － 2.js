const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const start = Array(+input[0]).fill(' ');

    start.forEach((_, index) => {
        start[+input[0] - +index - 1] = '*';
        console.log(start.join(''));
    });
}

solution();
