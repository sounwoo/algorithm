const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const [T, ...arr] = input;
    // 0 층에 i호는 i명 즉 -> 1층에 3호 까지 있다면 -> 1호에 1명 2호에 2명, 3호에 3명 -> 즉,0층에 총합 인원이 6명
    // 1층에 3호는 -> 0층에서 1호 +2호 +3호, 즉, 6명을 데리고 살아야 한다.
    // 1층에 1호는 : 1명, 2호는 : 3명, 3호는 : 6명
    // 2층에 1호는 : 1명, 2호는 : 4명, 3호는 : 10명
    // 3층에 1호는 : 1명, 2호는 : 5명, 3호는 : 15명

    // 코드 해석
    // k층에 n호는 : ((k - 1)층에 (n호))명 + (k층에 (n호 - 1호))명

    Array(+T)
        .fill(0)
        .forEach((_, index) => {
            const k = +arr[index * 2];
            const n = +arr[index * 2 + 1];

            const house = Array.from({ length: k + 1 }, () =>
                Array.from({ length: n + 1 }, () => 0)
            );
            for (let i = 1; i <= n; i++) house[0][i] = i;

            for (let i = 1; i <= k; i++) {
                for (let j = 1; j <= n; j++) {
                    house[i][j] = house[i - 1][j] + house[i][j - 1];
                }
            }
            console.log(house[k][n]);
        });
}

solution();
