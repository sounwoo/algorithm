const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    let num = input[0];

    const result = [];
    for (let i = 2; i <= +num; i++) {
        while (+num % i === 0) {
            num = +num / i;
            result.push(i);
        }
    }
    console.log(result.join('\n'));
}

solution();
