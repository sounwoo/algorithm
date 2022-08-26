const input = require('fs').readFileSync('./input.txt').toString().split('\n');

let count = [];

for (let i = 0; i < input.length; i++) {
    count.push(input[i] % 42);
}

let set = new Set(count);
const arr = [...set];
console.log(arr.length);
