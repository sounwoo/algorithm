function solution(n, k) {
    return Array(Math.floor(n / k)).fill(k).map((el ,i) => el *(i+1))
}