const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    let [N, K] = input.shift().split(' ');
    let index = +N - 1;
    let count = 0;
    while (+K !== 0) {
        if (+K < input[index]) index--;
        else {
            K -= input[index];
            count++;
        }
    }
    console.log(count);
}

solution();
