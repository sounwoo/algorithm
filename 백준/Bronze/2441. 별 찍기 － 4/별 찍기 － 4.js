const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution(data) {
    for (let i = +data; i > 0; i--) {
        console.log(' '.repeat(+data - i) + '*'.repeat(i));
    }
}
solution(input);
