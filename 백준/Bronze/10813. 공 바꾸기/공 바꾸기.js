const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution(data) {
    let [N, M] = data[0].split(' ').map(Number);
    let arr = Array(N)
        .fill(1)
        .map((a, b) => a + b);

    for (let i = 1; i <= M; i++) {
        let [x, y] = input[i].split(' ').map(Number);
        let tmp = arr[x - 1];
        arr[x - 1] = arr[y - 1];
        arr[y - 1] = tmp;
    }

    console.log(arr.join(' '));
}

solution(input);
