const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim();

function solution(data) {
    const croatia = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

    for (let alphabet of croatia) {
        data = data.replaceAll(alphabet, 'x');
    }
    console.log(data.length);
}

solution(input);
