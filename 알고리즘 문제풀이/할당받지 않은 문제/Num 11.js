// // 11.

// // 함수 solution은 정수 x와 자연수 n을 입력 받아, 
// // x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 
// // 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

// x는 -10000000 이상, 10000000 이하인 정수입니다.
// n은 1000 이하인 자연수입니다.

function solution(x, n) {
    var answer = [];

    for(let i = 1; i <= n; i++){ //x씩 증가하는 숫자(x의 배수)를 n = (x*n)
        answer.push(x*i); // 리스트(문자열)을 return해야 함으로 push를 씀
    }


    return answer;
}

console.log(solution(2,5))
console.log(solution(4,3))
console.log(solution(-4,2))