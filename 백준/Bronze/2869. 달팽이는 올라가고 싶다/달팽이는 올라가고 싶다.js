const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const [A, B, V] = input[0].split(' ');
    console.log(Math.ceil((V - B) / (A - B)));

    // 시간 초과
    // let total = 0;
    // let result = 0;

    // while (total < +V) {
    //     total += +A;
    //     result++;
    //     if (total >= +V) break;
    //     total -= +B;
    // }
    // console.log(result);
}

solution();
