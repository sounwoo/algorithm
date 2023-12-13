const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim();

function solution(data) {
    let money = 1000 - +data;
    const coins = [500, 100, 50, 10, 5, 1];
    let count = 0;
    for (i of coins) {
        if (!money) break;
        else {
            count += parseInt(money / i);
            money %= i;
        }
    }
    console.log(count);
}

solution(input);
