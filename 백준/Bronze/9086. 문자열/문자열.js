const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const [_, ...arr] = input;

    arr.forEach((el) => console.log(`${el[0]}${el[el.length - 1]}`));
}

solution();
