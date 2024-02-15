const filePath = process.platform === 'linux' ? '/dev/stdin' : 'ans.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split("\n");
let N = input[0], N_cards = new Set(input[1].split(" ")), M = input[2], M_cards = input[3].split(" ");

const result = [];
for(let card of M_cards){
     result.push(N_cards.has(card) ? 1 : 0);
}

console.log(result.join(' '))