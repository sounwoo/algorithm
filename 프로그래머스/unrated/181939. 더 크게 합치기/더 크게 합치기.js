function solution(a, b) {
    const num = String(a) + String(b)
    const num1 = String(b) + String(a)
    return Math.max(num,num1)
    // return Math.max(`${a}${b}` , `${b}${a}`)
}
