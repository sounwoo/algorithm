function solution(s) {
    var answer = '';
    // 홀수라면 .5 버림, 짝수라면 두번째글자를 가져온다 (index 번호가 0부터 시작)
    const center = Math.floor(s.length /2)
    // s.length % 2 나눠서 짝수인지 판별
    // s[center - 1] index 번호를 -1 해주면 1번째 글자를 가져오게 된다.
    // s.substring(center - 1, center + 1) 글자를 잘라오는 것도 가능
    answer = s.length % 2 === 0 ? s[center - 1] + s[center] : s[center];
    
    
    
    return answer;
}