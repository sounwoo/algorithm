function solution(dots) {
    const a = [...dots].sort((a,b) => b[0] - a[0])
    const b = [...dots].sort((a,b) => b[1] - a[1])
    return (a[0][0] - a[3][0]) * (b[0][1] - b[3][1])
}