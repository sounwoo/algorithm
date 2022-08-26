const input = require('fs').readFileSync('./input.txt').toString();

let n = Number(input);
let count = 0;
for (let i = 1; i <= n; i++) {
    if (i < 100) {
        count++;
    } else {
        i = String(i);
        if (i[0] - i[1] === i[1] - i[2]) {
            count++;
        }
    }
}
console.log(count);
