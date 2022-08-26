const input = require('fs')
    .readFileSync('./input.txt')
    .toString()
    .split('\n')
    .map(Number);

input.shift();

// 삽입정렬
const A = input;

for (let i = 1; i < A.length; i++) {
    let cur = A[i]; // 현재 A[i]
    let left = i - 1; // 현재 A[i] 의 왼쪽

    while (left >= 0 && A[left] > cur) {
        A[left + 1] = A[left]; //A[i]인 현재를 왼쪽 값으로 옮기고
        A[left] = cur; // 왼쪽은 현재 값으로 옮긴다.

        cur = A[left]; // 다시 현재값 변수를 왼쪽값으로 옮긴다.
        left--;
    }
}
console.log(A.join('\n'));

// 거품 정렬
var bubbleSort = function (array) {
    var length = array.length;
    var i, j, temp;
    for (i = 0; i < length - 1; i++) {
        // 순차적으로 비교하기 위한 반복문
        for (j = 0; j < length - 1 - i; j++) {
            // 끝까지 돌았을 때 다시 처음부터 비교하기 위한 반복문
            if (array[j] > array[j + 1]) {
                // 두 수를 비교하여 앞 수가 뒷 수보다 크면
                temp = array[j]; // 두 수를 서로 바꿔준다
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
};
console.log(bubbleSort(input).join('\n'));
