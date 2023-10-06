const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const open = ['(', '['];
    const closed = [')', ']'];
    const result = [];

    input.slice(0, input.length - 1).forEach((el) => {
        const stack = [];
        let isNo = false;
        for (let i = 0; i < el.length; i++) {
            if (open.includes(el[i])) stack.push(el[i]);
            else if (closed.includes(el[i])) {
                if (stack.pop() !== open[closed.indexOf(el[i])]) {
                    result.push('no');
                    isNo = true;
                    break;
                }
            }
        }
        if (!isNo) result.push(stack.length ? 'no' : 'yes');
    });

    console.log(result.join('\n'));
}

solution();
