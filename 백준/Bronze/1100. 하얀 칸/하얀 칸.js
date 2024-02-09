const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .split('\n');

function solution(data) {
    let count = 0;
    data.forEach((els, indexs) => {
        els.split('').forEach(
            (el, index) =>
                index % 2 === (indexs % 2 === 0 ? 0 : 1) && el === 'F' && count++
        );
    });
    console.log(count);
}

solution(input);
