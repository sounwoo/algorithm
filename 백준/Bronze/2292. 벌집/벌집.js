const input = require('fs').readFileSync('./dev/stdin').toString();

let range = 1,
    block = 1;
// 6(n)만큼 증가 n : range
// 6(0) = 1
// 6(1) = 1 + 6
// 6(2) = 1 + (6 * 1) + (6 * 2)
// 6(3) = 1 + (6 * 1) + (6 * 2) + (6 * 3)
// input 값이 block 보다 클때 즉, 현재방의 위치보다 input위치가 클때
while (block < input) {
    block += 6 * range;

    range++;
}

console.log(range);
