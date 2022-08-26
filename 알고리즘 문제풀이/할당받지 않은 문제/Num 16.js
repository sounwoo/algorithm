// 16.

// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. 
// s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 
// 다르면 False를 return 하는 solution를 완성하세요. 
// 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 
// 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.
// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

// 문자열 s의 길이 : 50 이하의 자연수
// 문자열 s는 알파벳으로만 이루어져 있습니다.


function solution(s){
    var answer = true;

    let p = 0 , y = 0; // p 와 y의 갯수를 저장하기 위한 변수

    s = s.toLowerCase(); // 전체 문자를 소문자로 봐꾸어 갯수를 확인 하기 위함

    for(let i in s){
        if (s[i] === "p"){ // p의 갯수를 카운팅
            p++;
        }
        else if(s[i] === "y"){ // y의 갯수를 카운팅
            y++;
        }    
    }
    answer = p === y ? true : false ; // p 와 y 가 갯수가 같은면 true 아니면 false
    return answer;
}


console.log(solution("pPoooyY"))
console.log(solution("Pyy"))






