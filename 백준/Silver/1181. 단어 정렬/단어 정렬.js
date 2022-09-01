const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replaceAll('\r', ''));

input.shift();

let arr = Array.from(new Set(input));
arr = arr.sort((a, b) => a.length - b.length);
let answer = [];

for (let i = 1; i <= arr[arr.length - 1].length; i++) {
    // 같은 길이에서 사전순으로 정렬
    let temp = arr.filter((el) => el.length === i);
    answer.push(...temp.sort());
}

console.log(answer.join('\n'));