function solution(numbers, n) {
    return numbers.reduce((acc, cur) => {
       return acc <= n ? acc + cur: acc + 0
    },0)
}