const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .split('\n');

function solution(data) {
    const lenArr = data.map((el) => el.length);
    const maxLen = Math.max(...lenArr);
    let word = '';

    for (let i = 0; i < maxLen; i++) {
        for (let j = 0; j < data.length; j++) {
            if (!data[j][i]) continue;
            else word += input[j][i];
        }
    }
    console.log(word);
}

solution(input);
