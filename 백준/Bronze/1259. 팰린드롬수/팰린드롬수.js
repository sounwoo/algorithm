const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replaceAll('\r', ''));

input.pop();

for (let i = 0; i < input.length; i++) {
    input[i] == input[i].split('').reverse().join('')
        ? console.log('yes')
        : console.log('no');
}
