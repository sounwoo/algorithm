const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("");

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const counts = Array(26).fill(0);

input.forEach((i) => counts[alphabet.indexOf(i)]++);

console.log(counts.join(" "));