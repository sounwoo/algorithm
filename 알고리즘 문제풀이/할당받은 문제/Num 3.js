// 3.
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 
// 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 재한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.


function solution(s) {
    var answer = '';
    
    if(s.length % 2 == 0){ // 짝수일때 qwer 중 q가0번째 임으로 2번쨰와 1번째
        answer = s[s.length / 2 - 1] + s[s.length / 2] ; 
    }else{ // 홀수일때 abcde 중 2.5번인데 c는 2번째 임으로 Math.floor함수를 통한 소수점 내림을 사용
        answer = s[Math.floor(s.length / 2)] ;   
    
    }
    
    return answer;
}

console.log(solution("abcde"))
console.log(solution("qwer"))
