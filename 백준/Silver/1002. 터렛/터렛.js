const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replaceAll('\r', ''));

// 두 점 사이의 거리와 r1, r2를 이용하여 두 원이 어떤 모양으로 접하는지를 파악
// 두 점에서 각각 반지름이 r1, r2인 원을 그렸을 때, 교점의 개수를 묻는 문제이다.
// 원의 중심과 반지름만 이용하면 쉽게 구할 수 있다.

const cases = parseInt(input[0]);
let result = '';

for (let i = 1; i <= cases; i++) {
    let tmp = input[i].split(' ').map(Number);

    let p1 = [tmp[0], tmp[1]],
        r1 = tmp[2];
    let p2 = [tmp[3], tmp[4]],
        r2 = tmp[5];

    let d = Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));
    // 두점 사이의 거리 => √(x1 - x2)² + (y1 - y2)² sqrt(루트),pow(제곱)
    // r1, r2 각각 원의 반지름

    if (d === 0 && r1 === r2) {
        // 두 원이 완벽히 겹칠떄 (무한대)
        result += '-1\n';
    } else if (d > r1 + r2 || d + r1 < r2 || d + r2 < r1) {
        // 두 원이 접하지 않을때, 작은 원이 큰원 내부에 있을때
        result += '0\n';
    } else if (d === r1 + r2 || d + r1 === r2 || d + r2 === r1) {
        // 두 원이 외접할때
        result += '1\n';
    } else {
        // 두 원이 두점에서 만날때
        result += '2\n';
    }
}

console.log(result);
