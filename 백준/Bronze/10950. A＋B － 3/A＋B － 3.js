const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const [a, ...b] = input;
    b.forEach((el) => {
        const [x, y] = el.split(' ');
        console.log(+x + +y);
    });
}

solution();
