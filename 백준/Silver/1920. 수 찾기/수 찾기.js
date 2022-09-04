const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replaceAll('\r', ''));

const A = input[1].toString().split(' ').sort();
const B = input[3].toString().split(' ');

const binary = (arr, num) => {
    let lt = 0;
    let rt = arr.length - 1;

    while (lt <= rt) {
        let mid = Math.floor((lt + rt) / 2);
        if (arr[mid] < num) {
            lt = mid + 1;
        } else if (arr[mid] > num) {
            rt = mid - 1;
        } else {
            return 1;
        }
    }
    return 0;
};

const answer = B.map((v) => {
    return binary(A, v);
});

console.log(answer.join('\n'));