const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let A = input[0];

const arr = new Set();

for (let i = 0; i < A.length; i++) {
    for (let j = i; j < A.length; j++) {
        arr.add(A.substring(i, j + 1));
    }
}

console.log(arr.size);

// 빈 set 자료형을 선언한다. (set 자료형을 사용하는 이유는 중복되는 문자열을 걸러내기 위해서)
// 문자열로 만들 수 있는 모든 경우의 수를 for 중첩 문을 통해 만들어낸다(완전 탐색)
// 만들어진 문자열을 set 자료형에 추가한다. 중복되는 문자열은 추가되지 않는다.
// set의 size를 출력한다.