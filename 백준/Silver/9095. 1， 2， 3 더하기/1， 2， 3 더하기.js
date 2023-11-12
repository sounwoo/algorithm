const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const arr = [0, 1, 2, 4];
    for (let i = 4; i < 11; i++) {
        arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
    }

    for (let i = 1; i <= input[0]; i++) {
        console.log(arr[input[i]]);
    }
}

solution();
