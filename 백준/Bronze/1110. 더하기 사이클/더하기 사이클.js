const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    let count = 0;
    let num = input[0];

    while (true) {
        let sum = parseInt((num % 10) + num / 10);
        num = (num % 10) * 10 + (sum % 10);
        count++;
        if (num === +input[0]) break;
    }
    console.log(count);
}

solution();
