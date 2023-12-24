const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .split('\n');

function solution(data) {
    const [n, m] = data[0].split(' ').map(Number);
    let baskets = Array(n)
        .fill()
        .map((_, i) => i + 1);

    for (let i = 1; i <= m; i++) {
        const [a, b] = data[i].split(' ').map(Number);
        const reverseArr = baskets.slice(a - 1, b).reverse();
        baskets.splice(a - 1, b - a + 1, ...reverseArr);
    }
    console.log(baskets.join(' '));
}

solution(input);
