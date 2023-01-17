function solution(s) {

    if (!(s.length === 4 || s.length ===  6)){ // s = a234 길이가 !(4 또는 6) 이면 (! = Not)
        return false
    } 
    
    for(let i in s){
           if (Number.isNaN(Number(s[i]))){ // Number.isNaN()함수는 어떤값이 NaN인지 판별 (NaN은 숫자가 아닌것을 판별)
               return false
           }
    }

    return true
}