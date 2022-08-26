const input = require('fs').readFileSync('./input.txt').toString();

const num = +input;

let result;

for (let i = 1; i < num; i++) {
    result = i;

    const A = i.toString();

    for (let j = 0; j < A.length; j++) {
        result += +A[j];
    }

    if (result === num) {
        console.log(i);
        return;
    }
}
console.log(0);
