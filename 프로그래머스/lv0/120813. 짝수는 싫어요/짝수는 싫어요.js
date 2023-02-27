function solution(n) {
    return new Array(n).fill(1).map((el,i) =>el + i).filter((el) => el % 2 !== 0)
}