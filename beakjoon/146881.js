const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n').map(Number);

// if (input[0] > 0 && input[1] > 0) {
//     console.log(1);
// } else if (input[0] < 0 && input[1] > 0) {
//     console.log(2);
// } else if (input[0] < 0 && input[1] < 0) {
//     console.log(3);
// }
// console.log(4);

if (input[0] > 0) {
    // x 좌표가 양수라면 (1 or 4)
    input[1] > 0 ? console.log(1) : console.log(4); // (y 좌표가 양수(1), 음수(4) )
} else {
    // x 좌표가 음수라면 (2 or 4)
    input[1] > 0 ? console.log(2) : console.log(3); // (y 좌표가 양수(2), 음수(3) )
}

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// let input = [];
// rl.on('line', function (line) {
//     input.push(parseInt(line));
// }).on('close', function () {
//     const a = input[0];
//     const b = input[1];

//     if (a > 0 && b > 0) {
//         console.log(1);
//     }
//     if (a < 0 && b > 0) {
//         console.log(2);
//     }
//     if (a < 0 && b < 0) {
//         console.log(3);
//     }
//     if (a > 0 && b < 0) {
//         console.log(4);
//     }
//     process.exit();
// });
