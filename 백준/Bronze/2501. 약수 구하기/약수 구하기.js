const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString();

function solution(data) {
    const [N, K] = data.split(' ');
    const ans = [];

    for (let i = 1; i <= N; i++) {
        if (N % i === 0) {
            ans.push(i);
        }
    }

    console.log(ans.length < K ? 0 : ans[K - 1]);
}

solution(input);
