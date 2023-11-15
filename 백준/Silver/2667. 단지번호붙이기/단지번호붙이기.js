const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution(data) {
    const N = +data.shift();
    const graph = data.map((el) => el.split('').map(Number));
    const visited = Array.from({ length: N }, () => Array.from({ length: N }, () => 0));
    const dir = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];
    const result = [];

    function BFS(x, y) {
        let count = 1;
        const queue = [[x, y]];
        visited[x][y] = 1;

        while (queue.length) {
            const [x, y] = queue.shift();
            for (let i = 0; i < dir.length; i++) {
                const [dx, dy] = dir[i];
                const [nx, ny] = [x + dx, y + dy];
                if (prefixes(nx, ny, N, N) && !visited[nx][ny] && graph[nx][ny]) {
                    queue.push([nx, ny]);
                    visited[nx][ny] = 1;
                    count++;
                }
            }
        }
        result.push(count);
    }

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (graph[i][j] && !visited[i][j]) {
                BFS(i, j);
            }
        }
    }
    console.log(result.length)
    console.log(result.sort((a, b) => a - b).join('\n'));
}
function prefixes(x, y, X, Y) {
    return 0 <= x && x < X && 0 <= y && y < Y;
}
solution(input);