const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const result = {
        '1 2 3 4 5 6 7 8': 'ascending',
        '8 7 6 5 4 3 2 1': 'descending',
    }[input[0]];

    console.log(result || 'mixed');
}

solution();
