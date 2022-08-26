const input = require('fs').readFileSync('./input.txt').toString().split(' ').map(Number);

let result = [0, 1];
if (input === 0) {
    console.log([0]);
}
if (input === 1) {
    console.log([1]);
}

for (let i = 2; i <= input; i++) {
    result.push(result[i - 2] + result[i - 1]);
}
console.log(result[input]);
