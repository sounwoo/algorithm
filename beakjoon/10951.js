// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// let A = [];

// for (let i = 0; i < input.length; i++) {
//     A.push(input[i].split(' ').map(Number));
//     console.log(A[i][0] + A[i][1]);
// }

const input = require('fs').readFileSync('./input.txt').toString().split('\n');

for (let i = 0; i < input.length; i++) {
    let [one, two] = input[i].split(' ').map(Number); // 공백을 기준으로 one= [0], two =[1]
    console.log(one + two);
}
