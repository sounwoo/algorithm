const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution(data) {
    const [n, m] = data.shift().split(' ').map(Number);
    const graph = data.map((el) => el.split('').map(Number));
    BFS(graph, n, m);
}

function BFS(graph, n, m) {
    const visited = Array.from({ length: n }, () => {
        return Array.from({ length: m }, () => 0);
    });

    const queue = [[0, 0, 1]];
    const dir = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ];
    visited[0][0] = 1;
    while (queue.length) {
        const [x, y, dist] = queue.shift();

        if (x === m - 1 && y === n - 1) {
            console.log(dist);
            return;
        }

        for (let i = 0; i < 4; i++) {
            const [dx, dy] = dir[i];
            const [nx, ny] = [x + dx, y + dy];

            if (prefixes(nx, ny, m, n) && !visited[ny][nx] && graph[ny][nx]) {
                queue.push([nx, ny, dist + 1]);
                visited[ny][nx] = 1;
            }
        }
    }
    
}

function prefixes(x, y, X, Y) {
    return 0 <= x && x < X && 0 <= y && y < Y;
}

solution(input);
