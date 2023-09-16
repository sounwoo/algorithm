const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const reuslt = [];

    for (let i = 97; i <= 122; i++) {
        reuslt.push(input[0].indexOf(String.fromCharCode(i)));
    }

    console.log(reuslt.join(' '));
}

solution();
