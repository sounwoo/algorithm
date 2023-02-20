function solution(my_string) {
    let a = new Set(my_string.split(''))
    const result = [...a]
    return result.join('')
}