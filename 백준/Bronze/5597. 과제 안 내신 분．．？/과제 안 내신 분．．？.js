const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const temp = [];
    Array(30)
        .fill(1)
        .map((el, i) => el + i)
        .forEach((el) => !input.includes(String(el)) && temp.push(el));

    console.log(temp.sort((a, b) => a - b).join('\n'));
}

solution();
