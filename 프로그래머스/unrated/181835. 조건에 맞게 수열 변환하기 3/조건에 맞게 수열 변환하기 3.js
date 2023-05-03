function solution(arr, k) {
    return arr.map((el) => k % 2 ===0 ? el + k: el * k)
    // return k % 2 === 0 ? arr.map((el) => el+k):arr.map((el) => el*k)
}