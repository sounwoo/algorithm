function solution(a, d, included) {
    return included.reduce((acc, cur) => {
        const temp = a
        a += d
        return cur ? acc + temp : acc
    },0)
}