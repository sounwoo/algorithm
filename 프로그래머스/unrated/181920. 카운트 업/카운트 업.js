function solution(start, end) {
    return new Array(end -start+1).fill(start).map((el,i) => el + i)
}