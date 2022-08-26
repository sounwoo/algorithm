// 9.
// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 
// 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

// phone_number는 길이 4 이상, 20이하인 문자열입니다.


function solution(phone_number) {
    return '*'.repeat(phone_number.length -4) + phone_number.slice(-4);
    // phone_number의 길이에서 -4만큼 *를 반화 (123456789) => *****
    // slice를 이용에 뒤에서 부터 4번째 자리만큼 더해줌(123456789) => 6789
}
console.log(solution("01033334444"))
console.log(solution("027778888"))