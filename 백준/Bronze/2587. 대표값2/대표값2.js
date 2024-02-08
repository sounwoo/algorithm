const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n");

let total = 0;

input.forEach(el => total += Number(el))

const mode = Math.floor(input.length / 2);
console.log(total / input.length);
console.log(input.sort((a, b) => a - b)[mode]);