// Hint -> n!(!팩토리얼)
// 팩토리얼 3! => 3 * 2 * 1
// 즉, 1 ~ 자신의 숫자 까지의 곱 
function solution(balls, share) {
    return Math.round((factorial(balls)/(factorial(balls-share)*factorial(share))));
}

function factorial(num) {
    let facNumber = 1;
    for(var i=2; i<=num; i++) facNumber *= i;
    return facNumber;
}
