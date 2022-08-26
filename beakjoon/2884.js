const input = require('fs').readFileSync('./input.txt').toString().split(' ').map(Number);

const [a, b] = input;

// 현재 분에서 -45 뺀 값 === 현재 분에서 15분 더합 값(현재 시에서 -1을 해줘야함)
if (0 < a && b < 45) {
    // b < 45 => 44 + 15 = 59
    console.log(a - 1, b + 15);
} else if (a == 0 && b < 45) {
    // a = 0 이고 b < 45 이면, (a - 1 = -1) => (24 -1 = 23)
    console.log(23, b + 15);
} else {
    console.log(a, b - 45); // a != 0 이라고 b > 45 이면, b - 45
}

// if (b > 45) {
//     console.log(a, b - 45);
// } else if (a < 0 && b < 45) {
//     console.log(a - 1, 15 + b);
// } else if (a < 0 && b > 45) {
//     console.log(a, b - 45);
// } else if (a === 0 && b < 45) {
//     console.log(23, 15 + b);
// }
