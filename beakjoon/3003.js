const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split(' ');

function anwer() {
    const price = [1, 1, 2, 2, 2, 8];
    const idx = [];

    for (let i = 0; i < price.length; i++) {
        if (input[i] !== price[i]) {
            idx.push(price[i] - input[i]);
        }
    }
    return idx.join(' ');
}

console.log(anwer());
