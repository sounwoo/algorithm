function solution(numbers) {
    const answer = numbers.reduce((acc, cur) => acc + cur)
    return answer / numbers.length
}