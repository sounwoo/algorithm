// const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n').map(Number);
// console.log(input);
// let [a,b,c] = input

const input = require('fs').readFileSync('./input.txt').toString().split(' ').map(Number);
console.log(input);
let [a, b, c] = input;

if (b + c >= 60) {
    // b + c >= 60 => 시간(H(a))에 더할껀지 말껀지 정하는 기준
    const d = Math.floor((b + c) / 60); // 소수점 자리 버림
    b = (b + c) % 60; // 60으로 나눈 나머지 몫 67 % 60 = 6
    a = (a + d) % 24; // 24로 나눈 나머지 몫( a + d > 24 : 1 ? 0)
    console.log(a, b);
} else {
    console.log(a, b + c);
}
