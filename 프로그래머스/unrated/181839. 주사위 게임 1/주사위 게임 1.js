function solution(a, b) {
    if(a % 2 === 1 && b % 2 === 1) return a*a + b*b
    else if(a % 2 === 1 || b % 2 === 1) return 2 * (a + b)
    else return Math.abs(a - b)
    // return a % 2 && b % 2 ? a * a + b * b : a % 2 || b % 2 ? 2 * (a + b) : Math.abs(a - b)
}