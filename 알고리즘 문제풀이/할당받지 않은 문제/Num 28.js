// 28.

// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 
// 예를 들어 18의 자릿수 합은 1+8=9이고, 
// 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 
// 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, 
// solution을 완성해주세요.

// x는 1 이상, 10000 이하인 정수입니다.


function solution(x) {
    var answer = true;

    let str = x.toString().split('');
    // x의 값을 문자열로 봐꿔서 '1','0'
    let sum = 0;
    for(let i in str){
        sum += Number(str[i]); // Number('1' + '0' ='1') 숫자로 변환
        answer = (x % sum == 0) ? true : false ;
    }



    return answer;
}




console.log(solution(10))
console.log(solution(12))
console.log(solution(11))
console.log(solution(13))