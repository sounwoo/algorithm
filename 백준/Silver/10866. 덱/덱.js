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

        if (command === 'push_front') stack.unshift(X);
        else if (command === 'push_back') stack.push(X);
        else if (command === 'pop_front') result.push(stack.shift() ?? -1);
        else if (command === 'pop_back') result.push(stack.pop() ?? -1);
        else if (command === 'size') result.push(stack.length);
        else if (command === 'empty') result.push(stack.length ? 0 : 1);
        else if (command === 'front') result.push(stack[0] ?? -1);
        else result.push(stack.at(-1) ?? -1);
    });
    console.log(result.join('\n'));
}

solution();
