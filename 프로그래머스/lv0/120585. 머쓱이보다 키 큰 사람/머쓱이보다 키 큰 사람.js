function solution(array, height) {
    return array.sort((a,b) => a - b).filter((el) => el > height).length
}