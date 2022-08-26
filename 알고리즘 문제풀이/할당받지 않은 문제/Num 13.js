// 13.

// 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 
// 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 
// 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT
// 입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

// 2016년은 윤년입니다.
// 2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)


function solution(a, b) {
    var answer = '';

    // week라는 변수에 일요일부터 토요일까지의 요일을 넣어준다
    let week = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    // ``백틱을 사용 하면 ${} 사이에 변수나 연산 등을 삽임할 수 있게 된다.
    // getDay()함수는 날짜의 요일을 받아오는 함수로 일요일부터 토요일까지 0부터 6을 반환
    let day = new Date(`2016-${a}-${b}`).getDay();

    return answer = week[day]; // week의 [i]번째 인덱스를 리턴
}


console.log(solution(5,24))
