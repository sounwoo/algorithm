// 17.

// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 
// 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.


// s는 길이 1 이상, 길이 8 이하인 문자열입니다.



// 17.

// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 
// 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.


// s는 길이 1 이상, 길이 8 이하인 문자열입니다.



function solution(s) {

    if (!(s.length == 4 || s.length ==  6)){ // a234 길이가 !(4 또는 6) 이면 (! = Not)
        return false
    } else {
        const temp = s.split('') 
        // 문자열이 있는지 확인 하기 위해 split()을 사용해 'a' , '2' , '3' , '4' 
        for(let i in temp){
        if (isNaN(temp[i])){ // isNaN()함수는 어떤값이 NaN인지 판별 (NaN은 숫자가 아닌것을 판별)
            return false
            }
        }

    }
    return true // 모든조건이 아니면 true
}


console.log(solution("a234"))
console.log(solution("1234"))
