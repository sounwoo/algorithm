const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const [N, numArr1, M, numArr2] = input;
    const numObj = {};
    const result = [];
    numArr1.split(' ').forEach((el) => {
        numObj[el] = (numObj[el] || 0) + 1;
    });
    numArr2.split(' ').forEach((el) => result.push(numObj[el] ?? 0));
    console.log(result.join(' '));
}

solution();
