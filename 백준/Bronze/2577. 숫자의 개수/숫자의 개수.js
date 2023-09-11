const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const [A, B, C] = input;
    const sum = A * B * C;
    const obj = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };

    [...String(sum)].forEach((el) => {
        obj[el] = (obj[el] || 0) + 1;
    });

    Object.values(obj).forEach((el) => console.log(el));
}

solution();
