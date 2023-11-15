const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution(data) {
    const [x, y] = data.shift().split(' ').map(Number);
    const result = [];
    for (let i = 0; i < x; i++) {
        const A = data[i].split(' ');
        const B = data[i + x].split(' ');
        let array_sum = '';
        for (let j = 0; j < A.length; j++) {
            array_sum += +A[j] + +B[j] + ' ';
        }

        result.push(array_sum.trim());
    }
    console.log(result.join('\n'));
}
solution(input);