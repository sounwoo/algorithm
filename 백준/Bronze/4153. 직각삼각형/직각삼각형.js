const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    input.forEach((el) => {
        const [A, B, C] = el.split(' ').sort((a, b) => +a - +b);
        (+A || +B || +C) &&
            console.log(
                Math.pow(+A, 2) + Math.pow(+B, 2) === Math.pow(+C, 2) ? 'right' : 'wrong'
            );
    });
}

solution();
