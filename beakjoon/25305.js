const input = require('fs').readFileSync('./input.txt').toString().split('\n');

// let A = input[0];

// const B = input[1].split(' ').sort((a, b) => b - a);

// console.log(B[A.split(' ')[1] - 1]);

console.log(input[1].split(' ').sort((a, b) => b - a)[input[0].split(' ')[1] - 1]);
