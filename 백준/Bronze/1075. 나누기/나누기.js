const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const [N, F] = input;
    const num = N.slice(0, N.length - 2) + '00';
    let bool = true;
    let result = 0;
    let i = 0;

    while (bool) {
        result = +num + i;
        if ((+num + i) % +F !== 0) i++;
        else bool = false;
    }

    console.log(String(result).slice(-2));
}

solution();
