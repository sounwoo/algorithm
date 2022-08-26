const input = require('fs')
    .readFileSync('./input.txt')
    .toString()
    .split('\n')
    .map(Number);

console.log(input);
