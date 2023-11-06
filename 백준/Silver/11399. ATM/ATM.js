const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const [N, ...P] = input;
    const arr = P[0].split(' ').sort((a, b) => a - b);
    let total = 0;
    let sum = 0;
    for (let i = 0; i < N; i++) {
        const cur = +arr[i];
        total += sum + cur;
        sum += cur;
    }
    console.log(total);
}

solution();
