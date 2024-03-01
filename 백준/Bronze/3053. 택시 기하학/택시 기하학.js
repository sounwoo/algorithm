const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();
 
const PI = Math.PI
 
const r = parseInt(input);

console.log((PI * r * r).toFixed(6))

console.log((2 * r * r).toFixed(6))