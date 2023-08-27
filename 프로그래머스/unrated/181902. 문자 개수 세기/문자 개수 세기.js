function solution(my_string) {
    const arr = Array(52).fill(0)
    return [...my_string].reduce((acc, cur) => {
        const temp= cur.charCodeAt()
        const curIdx = temp >= 97 ? temp - 71 : temp-65
        acc[curIdx] = acc[curIdx] ?? 0
        acc[curIdx]++
        return acc
    }, arr)
}