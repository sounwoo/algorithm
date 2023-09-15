const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const [, ...customer] = input;

    customer.forEach((el) => {
        let [H, _, N] = el.split(' '),
            W = 0;

        while (N > 0) {
            N -= +H;
            W++;
        }

        console.log(`${N + +H}${W < 10 ? '0' + W : W}`);
    });
}

solution();
