const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim();

function solution(data) {
    const [month, day] = data.split(' ');

    const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    console.log(week[new Date(`2007-${month}-${day}`).getDay()]);
}

solution(input);
