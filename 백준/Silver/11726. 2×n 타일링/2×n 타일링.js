const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');
function solution(data) {
    const arr = [0, 1, 2];

    for (let i = 3; i <= +data; i++) {
        arr[i] = (arr[i - 1] + arr[i - 2]) % 10007;
    }
    console.log(arr[data]);
}

solution(input);
