const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function fa(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

function solution() {
    //  n! / k!(n-k)! 이항계수 구하는 식
    // (!)팩토리얼 => 자기 자신의 숫자 전까지의 곱합
    const [N, K] = input[0].split(' ');
    console.log(fa(+N) / (fa(+K) * fa(+N - +K)));
}

solution();
