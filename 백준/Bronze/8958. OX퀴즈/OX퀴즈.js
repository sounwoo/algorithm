const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const [, ...element] = input;

    element.forEach((el) => {
        let result = 0, count = 0;

        el.split('').forEach((els) => (els === 'X' ? (count = 0) : (result += ++count)));
        console.log(result);
    });
}

solution();
