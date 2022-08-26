const input = require('fs').readFileSync('./input.txt').toString().split('\n');

input.shift();
input.sort((a, b) => a - b);
const B = input.join('\n');

console.log(B);
// for (let i = 0; i < A; i++) {
//     console.log(input[i]);
// }
