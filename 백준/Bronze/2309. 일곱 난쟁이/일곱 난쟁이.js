const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const sum = input.reduce((acc, cur) => acc + cur, 0);
let answer = [];

for (let i = 0; i < input.length; i++) {
  for (let j = i + 1; j < input.length; j++) {
    const partial_sum = input[i] + input[j];

    if (sum - partial_sum === 100) {
      answer = input
        .filter((item) => item !== input[i] && item !== input[j])
        .sort((a, b) => a - b);
      break;
    }
  }
}

console.log(answer.join("\n"));