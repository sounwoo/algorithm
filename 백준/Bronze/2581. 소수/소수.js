const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution(data) {
    const [M, N] = data.map(Number);

    let primeArr = [];

    function isPrime(num) {
        if (num === 1) return;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return;
        }
        return primeArr.push(num);
    }
    for (let i = M; i <= N; i++) {
        isPrime(i);
    }
    console.log(
        !primeArr.length
            ? -1
            : primeArr.reduce((acc, cur) => acc + cur, 0) + '\n' + Math.min(...primeArr)
    );
}

solution(input);
