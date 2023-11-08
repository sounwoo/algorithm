const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const V = +input[0].split(' ')[2];

    const temp = [];
    for (let i = 1; i < input.length; i++) {
        const [start, el] = input[i].split(' ').map((el) => +el);
        temp[start] = temp[start] ? [...temp[start], el] : [el];
        temp[el] = temp[el] ? [...temp[el], start] : [start];
    }
    const nodeList = temp.map((el) => el.sort((a, b) => a - b));
    const DFS_Array = [];
    const BFS_Array = [];
    const DFS = (V) => {
        if (DFS_Array.includes(V)) return;

        DFS_Array.push(V);
        if (nodeList[V])
            nodeList[V].forEach((el) => {
                DFS(el);
            });
    };
    DFS(V);

    const check = [];
    const queue = [V];
    const bfs = () => {
        const vertex = queue.shift();
        if (check[vertex]) return;
        if (BFS_Array.includes(vertex)) return;
        check[vertex] = true;
        BFS_Array.push(vertex);
        if (nodeList[vertex])
            nodeList[vertex].forEach((el) => {
                queue.push(el);
            });
    };
    while (queue.length) {
        bfs(V);
    }

    console.log(...DFS_Array);
    console.log(...BFS_Array);
}

solution();
