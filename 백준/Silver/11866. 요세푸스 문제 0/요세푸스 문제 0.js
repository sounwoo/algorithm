const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const [N, K] = input[0].split(' ');
    const arr = Array(+N)
        .fill(0)
        .map((_, index) => ++index);

    const result = [];
    let index = 1;
    while (arr.length) {
        const temp = arr.shift();
        index % +K ? arr.push(temp) : result.push(temp);
        index++;
    }
    console.log(`<${result.join(', ')}>`);
}

solution();
