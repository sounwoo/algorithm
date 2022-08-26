const input = require('fs').readFileSync('./input.txt').toString().split(' ').map(Number);

// 자연수의 모든 약수를 찾을 때 가운데 약수(제곱근)까지만 확인하면 된다.
const [M, N] = input;
const isPrimeNumber = Array(N + 1).fill(true);
isPrimeNumber[1] = false;

for (let n = 2; n <= Math.ceil(Math.sqrt(N)); n++) {
    if (isPrimeNumber[n]) {
        let m = 2;
        while (n * m <= N) {
            isPrimeNumber[n * m] = false;
            m++;
        }
    }
}

for (let n = M; n <= N; n++) {
    if (isPrimeNumber[n]) {
        console.log(n);
    }
}
