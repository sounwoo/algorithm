const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replaceAll('\r', ''));
// 같은 숫자 없는 것을 출력하면 된다.
let A = [],
    B = [];
let C, D;

for (let i = 0; i < input.length; i++) {
    A.push(Number(input[i].toString().split(' ')[0])); // X 좌표만 배열에 넣기
    B.push(Number(input[i].toString().split(' ')[1])); // y 좌표만 배열에 넣기
}
A = A.sort(); // sort로 정렬
B = B.sort();

C = A[1] === A[0] ? A[2] : A[0]; 
D = B[1] === B[0] ? B[2] : B[0]; 
// [10, 10, 30] => A[1] === A[0] 10 = 10 => A[2] 30
// [10, 20, 20] => B[1] === B[0] 10 = 20 => A[0] 10
console.log(C, D);