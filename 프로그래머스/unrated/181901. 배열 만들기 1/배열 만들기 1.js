function solution(n, k) {
    return new Array(Math.floor(n / k)).fill(k).map((el ,i) => el *(i+1))
}