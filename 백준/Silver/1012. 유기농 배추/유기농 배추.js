const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');
input.shift();

function solution(data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].split(' ').length === 3) {
            const [M, N, K] = data[i].split(' ').map(Number);
            const arr = data.slice(i + 1, K + i + 1);
            act(M, N, arr);
        }
    }
}

function act(M, N, arr) {
    const graph = Array.from({ length: N }, () => Array.from({ length: M }, () => 0));
    const visited = Array.from({ length: N }, () => Array.from({ length: M }, () => 0));
    arr.forEach((el) => {
        const [x, y] = el.split(' ');
        graph[y][x] = 1;
    });

    let count = 0;

    function BFS(x, y) {
        const queue = [[x, y]];
        const dir = [
            [0, -1],
            [0, 1],
            [1, 0],
            [-1, 0],
        ];

        while (queue.length) {
            const [x, y] = queue.shift();
            if (visited[y][x]) continue;
            visited[y][x] = 1;
            for (let i = 0; i < dir.length; i++) {
                const [dx, dy] = dir[i];
                const [nx, ny] = [x + dx, y + dy];

                if (prefixes(ny, nx, N, M) && !visited[ny][nx] && graph[ny][nx]) {
                    queue.push([nx, ny]);
                }
            }
        }
    }
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (graph[i][j] && !visited[i][j]) {
                BFS(j, i);
                count++;
            }
        }
    }
    console.log(count);
}

function prefixes(x, y, X, Y) {
    return 0 <= x && x < X && 0 <= y && y < Y;
}

solution(input);
