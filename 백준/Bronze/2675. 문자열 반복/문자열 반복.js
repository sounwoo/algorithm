const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    input.forEach((el) => {
        const [leng, word] = el.split(' ');
        word && console.log([...word].map((el) => el.repeat(leng)).join(''));
    });
}

solution();
