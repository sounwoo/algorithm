function solution(q, r, code) {
    return [...code].filter((el,i) => i % q === r).join("")
}