const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replaceAll('\r', ''));

const N = input[0];
const arr = input[1].split(' ').map(Number);
let count = 0;

function isprim(arr) { // arr[i] 번째가 소수인지 아닌지 판별 
    if (arr === 1) return; // 1인값일때는 소수가 아님
    for (let i = 2; i <= Math.sqrt(arr); i++) { // 3,5,7 의 제곱근 까지 범위를 설정
        if (arr % i === 0) return;  // 예를 들어 들어오는 값이 4 라면 4 % 2 = 2 이므로 소수가 아님
    }
    return arr; // 소수인 값 
}

for (let i = 0; i < N; i++) {
    if (isprim(arr[i])) count++; // 소수인 값이 있으면 count에 1씩 증가시켜준다.
}
console.log(count);