function solution(seoul) {
    var answer = '';
    for(let i=0; i<=seoul.length; i++){
        if(seoul[i] === "Kim") { // seoul의 i번째 값이 Kim 이면
            answer = `김서방은 ${i}에 있다`;
            break;
        }
    }
    return answer;
}