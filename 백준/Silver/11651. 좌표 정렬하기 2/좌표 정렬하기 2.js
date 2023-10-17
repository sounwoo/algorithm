const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const [N, ...arr] = input;
    const newArr = arr.map((el) => el.split(' ').map((els) => +els));
    let result = '';
    newArr
        .sort((a, b) => (a[1] !== b[1] ? a[1] - b[1] : a[0] - b[0]))
        .forEach((el) => (result += `${el[0]} ${el[1]}\n`));
    console.log(result);
}

solution();
