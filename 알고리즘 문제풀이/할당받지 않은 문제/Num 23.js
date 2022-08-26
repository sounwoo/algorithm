// 23.

// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 
// 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

// n은 10,000,000,000이하인 자연수입니다.

function solution(n) {
    var answer = [];

    let str = n.toString().split('').reverse();
    // 문자열로 봐꾸고, split으로 각각 나눠서 reverse 배열의 요소를 뒤집는다
    // ['5','4','3','2','1']
    for(let i in str){
        answer[i] = Number(str[i]);
    }// ['5','4','3','2','1'] = Number([5, 4, 3, 2, 1]) 배열의 요소를 숫자로변환
    

    return answer;
}







console.log(solution(12345))