const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    // M을 넘지 않는 카드 3장의 합중 가장 큰값을 출력
    const [N, M] = input[0].split(' ');
    const numCard = input[1].split(' ');
    let numMax = 0;

    for (let i = 0; i < N - 2; i++) {
        for (let j = i + 1; j < N - 1; j++) {
            for (let k = j + 1; k < N; k++) {
                const sum = +numCard[i] + +numCard[j] + +numCard[k];
                if (sum > numMax && sum <= M) numMax = sum;
            }
        }
    }

    console.log(numMax);
}

solution();
