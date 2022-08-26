const input = require('fs').readFileSync('./input.txt').toString().split('\n');

let [count, int] = input;
int = int.split(' ');

let Max = Math.max(...int);
let Min = Math.min(...int);

console.log(Min, Max);
