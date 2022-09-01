const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replaceAll('\r', ''));

input.pop();

for (let i = 0; i < input.length; i++) {
    let reverse_input = input[i].split('').reverse().join('');
    if (input[i] == reverse_input) {
        console.log('yes');
    } else {
        console.log('no');
    }
}