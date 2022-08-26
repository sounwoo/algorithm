// 22. 

// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 
// solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

// N의 범위 : 100,000,000 이하의 자연수

function solution(n){
    var answer = 0;

    let str = n.toString().split('');
    // n의 값을 문자열로 봐꿔서 '1' , '2', '3'

    for(let i in str){
        answer += Number(str[i]); // Number('1' + '2' +'3' ='6') 숫자로 변환
    }
    return answer;
}



console.log(solution(123))
console.log(solution(987))