// 21.

// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 
// 각 단어의 짝수번째 알파벳은 대문자로, 
// 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

// 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
// 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.


function solution(s) {
    var answer = '';
    let temp = s.split(" ");
 //  공백문자로 구분 되어있다. => split(" ")으로 공백을 기준으로 나눈다.["try"],["hello"],["world"]
    for(let i in temp){ // let i = 0; i < temp.langth; i++ 과 같은 문장
        for(let j in temp[i]){
            if(j % 2 == 0){ // ["try"],["hello"],["world"] 하나씩 불러와서 try % 2 로 나눈 값
                answer += temp[i][j].toUpperCase(); // toUpperCase()로 짝수면 대문자
            }else{
                answer += temp[i][j].toLowerCase(); // toLowerCase()로 홀수면 소문자
            }
        }answer += " "; // TrYHeLlOWoRlD 이렇게 나오기 때문에 공백을 추가하기
    }
    
    return answer.slice(0,-1); 
    // TrY(공백)HeLlO(공백)WoRlD(공백) 단어 뒤에 마다 공백을 넣어주었기 때문에
    // slice(0,-1)로 맨뒤 자리를 0번째 추출 
}


console.log(solution("try hello world"))