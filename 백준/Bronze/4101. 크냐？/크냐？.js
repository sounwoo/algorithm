const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    input.forEach((el) => {
        const [A, B] = el.split(' ');
        if (+A !== 0 && +B !== 0) console.log(+A > +B ? 'Yes' : 'No');
    });
}

solution();
