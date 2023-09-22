const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const [T, ...arr] = input;
    let answer = '';
    Array(+T)
        .fill(0)
        .forEach((_, index) => {
            const [A, B] = arr[index].split(' ');
            answer += +A + +B + '\n';
        });
    console.log(answer);
}

solution();
