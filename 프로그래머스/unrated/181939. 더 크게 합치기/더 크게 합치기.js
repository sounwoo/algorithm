function solution(a, b) {
    const num = String(a) + String(b)
    const num1 = String(b) + String(a)
    return num > num1 ? Number(num) : Number(num1)
}