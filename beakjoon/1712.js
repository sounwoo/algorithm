const input = require('fs').readFileSync('./input.txt').toString().split(' ').map(Number);

// A(고정비용),B(가변비용), C(판매가격)
// 식을 만들어 보면 마진은 판매 가격에서 가변 비용을 빼주면 마진 값으로 구함 (C-B)
// 고정 비용에서 해당 값을 나눠주면 손익분기점(A/ (C-B))
// 이때 손익분기점이 아닌 넘기는 수를 구해야 하므로 +1

let [A, B, C] = input;

let sum = Math.floor(A / (C - B)) + 1;

C - B <= 0 ? console.log(-1) : console.log(sum);
