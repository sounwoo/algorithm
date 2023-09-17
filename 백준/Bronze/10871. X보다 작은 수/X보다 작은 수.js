const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const result = [];
    const [_, X] = input[0].split(' ');
    input[1].split(' ').forEach((el) => {
        X > +el && result.push(+el);
    });
    console.log(result.join(' '));
}

solution();
