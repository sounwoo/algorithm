const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution(data) {
    data.pop();
    data.forEach((el) => {
        const [A, B] = el.split(' ');

        if (B % A === 0) {
            console.log('factor');
        } else if (A % B === 0) {
            console.log('multiple');
        } else {
            console.log('neither');
        }
    });
}

solution(input);
