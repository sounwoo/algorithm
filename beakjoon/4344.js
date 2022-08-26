const input = require('fs').readFileSync('./input.txt').toString().split('\n');

let count = input[0];
input.splice(0, 1);
let A = [];
let B = 0;
let C = 0;

for (let i = 0; i < count; i++) {
    A = input[i].split(' ').map(Number);
    A.splice(0, 1);
    const result = A.reduce((sum, currValue) => {
        return sum + currValue;
    });
    const average = result / A.length;

    B = A.filter((v) => v > average);

    C = ((B.length / A.length) * 100).toFixed(3);
    console.log(C + '%');
}
