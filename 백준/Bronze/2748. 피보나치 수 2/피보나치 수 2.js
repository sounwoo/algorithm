const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim();

function solution(data) {
    const DP = [0, 1];

    for (let i = 1; i < data; i++) {
        DP[i + 1] = BigInt(DP[i]) + BigInt(DP[i - 1]);
    }

    console.log(DP[data].toString());
}

solution(+input);
