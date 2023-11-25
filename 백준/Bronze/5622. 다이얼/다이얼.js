const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim();

function solution(data) {
    const phone = {
        2: 'ABC',
        3: 'DEF',
        4: 'GHI',
        5: 'JKL',
        6: 'MNO',
        7: 'PQRS',
        8: 'TUV',
        9: 'WXYZ',
    };
    let result = 0;

    for (let i = 0; i < data.length; i++) {
        for (let j = 2; j <= 9; j++) {
            if (phone[j].includes(data[i])) {
                result += j + 1;
                break;
            }
        }
    }

    console.log(result);
}

solution(input);
