const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const [N, ...arr] = input;

    let result = 0;
    for (let i = 0; i < N; i++) {
        const word = arr[i];
        let temp = {};
        let bool = true;
        for (let j = 0; j < word.length; j++) {
            if (!temp[word[j]]) temp[word[j]] = true;
            else if (word[j] !== word[j - 1]) {
                bool = false;
                break;
            }
        }

        bool && result++;
    }
    console.log(result);
}

solution();
