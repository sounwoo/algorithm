const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map((e) => Number(e.replaceAll('\r', '')));

input.shift();
let stack = [];
let answer = '';
let count = 1;

for (let i = 0; i < input.length; i++) {
    while (count <= input[i]) {
        stack.push(count);
        answer += '\n+';
        count++;
    }
    if (stack[stack.length - 1] == input[i]) {
        stack.pop();
        answer += '\n-';
    } else {
        answer = 'NO';
        break;
    }
}
console.log(answer.trim());
