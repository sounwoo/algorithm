const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    input.forEach((el) => {
        const [x, y] = el.split(' ');
        +x + +y && console.log(+x + +y);
    });
}

solution();
