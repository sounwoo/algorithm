function solution(num_list) {
    let a = 0
    let b = 0
    num_list.forEach((el, i) => i % 2 === 0 ? a += el: b += el)
    console.log(a,b)
    return a > b ? a : b
}