const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const [N, __, ...arr] = input;
    const graph = [...new Array(+N + 1)].map(() => []);

    arr.forEach((num) => {
        const [A, B] = num.split(' ');

        graph[A].push(B);
        graph[B].push(A);
    });
    const visited = [...new Array(+N + 1)].fill(0);
    let answer = 0;
    const dfs = (node) => {
        visited[node] = 1;
        for (let num of graph[node]) {
            if (!visited[num]) {
                answer++;
                dfs(num);
            }
        }
    };
    dfs(1);
    console.log(answer);
    // const graph = [];

    // arr.forEach((num) => {
    //     const [A, B] = num.split(' ');

    //     graph[A] = graph[A] ? [...graph[A], B] : [B];
    //     graph[B] = graph[B] ? [...graph[B], A] : [A];
    // });
    // set으로 풀이 런타임 에러
    // const result = [...graph[1]];

    // graph[1].forEach((num) => {
    //     result.push(...graph[num]);
    // });
    // console.log([...new Set(result)].length - 1);
    
}

solution();
