const input = require('fs')
    .readFileSync('./input.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replaceAll('\r', ''));

const A = input[0].split(' ')[1]; // 정답 갯수 5
input.shift();
let B = input.slice(-A); // 주어지는 문제 [25, Raichu, 3 ,Pidgey, kakuna]
input.splice(-A); // 포켓폰 도감 26
let C = [];
let D = B.map((v) => !+v);
let X = {};

for (let i = 0; i < input.length; i++) {
    X[input[i]] = i;
    X[i] = input[i];
}

for (let i = 0; i < A; i++) {
    if (D[i] == true) {
        C.push(X[B[i]] + 1);
    } else {
        C.push(X[B[i] - 1]);
    }
}
console.log(C.join('\n'));
