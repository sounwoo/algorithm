const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const [N, ...arr] = input;

    const result = arr.map((el) => {
        const [a, b] = el.split(' ');
        let pow = 1;

        for (let j = 0; j < b; j++) {
            pow = (pow * a) % 10;
        }

        return pow || 10 ;
    });
    console.log(result.join('\n'));
}

solution();
