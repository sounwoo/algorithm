const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const [N, ...arr] = input;
    const obj = [];
    arr.forEach((el) => {
        const [age, name] = el.split(' ');
        obj.push({ age, name });
    });
    const result = obj.sort((a, b) => +a.age - +b.age);

    result.forEach((el) => console.log(Object.values(el).join(' ')));
}

solution();
