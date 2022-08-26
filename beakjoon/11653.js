const input = require('fs').readFileSync('./input.txt').toString().split(' ').map(Number);

let num = input;

let A = 2;

while (num > 1) {
    let sum = num % A;
    if (sum == 0) {
        console.log(A);
        num = num / A;
    } else {
        A++;
    }
}
