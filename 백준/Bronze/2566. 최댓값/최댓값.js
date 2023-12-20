const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .split('\n');

function solution(data) {
    let max = 0;
    let coord = [1, 1];

    data.forEach((row, rIdx) => {
        row.split(' ').forEach((col, cIdx) => {
            const numCol = Number(col);
            if (numCol > max) {
                max = numCol;
                coord = [rIdx + 1, cIdx + 1];
            }
        });
    });

    console.log(max + '\n' + coord.join(' '));
}

solution(input);
