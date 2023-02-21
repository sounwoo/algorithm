function solution(score) {
    const avg = score.map(el => (el[0] + el[1]) / el.length)
    const avgSort = [...avg].sort((a,b) => b - a)
    return avg.map(el => avgSort.indexOf(el) + 1)
}