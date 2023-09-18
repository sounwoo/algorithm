const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    let result = 0;

    for (let i = 5; i <= +input[0]; i *= 5) {
        result += parseInt(+input[0] / i);
    }
    console.log(result);
}

solution();
