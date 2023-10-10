const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const [N, ...arr] = input;
    const result = [];
    const stack = [];
    arr.forEach((el) => {
        const [command, X] = el.split(' ');
        if (command === 'push') stack.push(+X);
        else if (command === 'pop') result.push(stack.pop() ?? -1);
        else if (command === 'size') result.push(stack.length);
        else if (command === 'empty') result.push(stack.length ? 0 : 1);
        else result.push(stack[stack.length - 1] ?? -1);
    });
    console.log(result.join('\n'));
}

solution();
