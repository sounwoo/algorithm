const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const [T, ...arr] = input;

    arr.forEach((el, index) => console.log(`Case #${index + 1}: ${+el[0] + +el[2]}`));
}

solution();
