// 8.
// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
// arr은 길이 1 이상, 100 이하인 배열입니다.
// arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.

function solution(arr) {
    var answer = 0;
    for (let i = 0; i < arr.length; i++) { //[1, 2, 3, 4] arr[1~4]돌면서 더하기 1+2+3+4 = 총합
        answer += arr[i];
    }
    return answer / arr.length; // 총합 = 10 / 4(arr.length) = 평균값
}

console.log(solution([1, 2, 3, 4]))
console.log(solution([5, 5]))