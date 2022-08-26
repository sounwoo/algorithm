const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');

let sum = input[0]; // 총합
let type = input[1]; // 물건의 종류수
input.splice(0, 2); // 총합,물건의 종류수 제거 ...input

let result = 0;

for (let i = 0; i < type; i++) {
    console.log(input[i].split(' ').map(Number));
    let [amount, count] = input[i].split(' ').map(Number); // 공백을 기준으로 amount = [0], count =[1]
    result += amount * count;
}

if (result == sum) {
    console.log('Yes');
} else {
    console.log('No');
}

// const fs = require('fs');
// let input = fs.readFileSync('./input.txt').toString().trim().split(/\s+/).map(Number);

// let sum = input[0];
// let sum_arr = input.slice(1, sum + 1);
// let [type, ...x] = sum_arr;

// let amount = x.filter((v) => v >= 10);
// let count = x.filter((v) => v <= 10);
// let A = 0;
// console.log(amount, count);

// for (let i = 0; i < type; i++) {
//     A += amount[i] * count[i];
// }

// if (A == sum) {
//     console.log('Yes');
// } else {
//     console.log('No');
// }
