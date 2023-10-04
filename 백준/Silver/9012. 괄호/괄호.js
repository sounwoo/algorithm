const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const [T, ...arr] = input;
    arr.forEach((el) => {
        const stack = [];
        let result = 'YES';
        el.split('').forEach((els) => {
            if (els === '(') stack.push(1);
            else {
                if (!stack.pop()) result = 'NO';
            }
        });

        if (stack.length) result = 'NO';

        console.log(result);
    });
}

solution();
