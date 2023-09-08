const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const word = input[0];
    const obj = {};

    let reslut = '',
        count = 0;

    [...word].forEach((el) => {
        el = el.toUpperCase();
        obj[el] = (obj[el] || 0) + 1;
    });

    for (let key in obj) {
        if (obj[key] > count) {
            count = obj[key];
            reslut = key;
        } else if (obj[key] === count) reslut = '?';
    }

    console.log(reslut);
}

solution();
