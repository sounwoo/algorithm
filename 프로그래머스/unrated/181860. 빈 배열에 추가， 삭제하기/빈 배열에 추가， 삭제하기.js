
function solution(arr, flag) {
    const answer = []
    flag.forEach((el,i) => {
        if(el) {
            const temp = Array(arr[i] * 2).fill(arr[i])
            answer.push(...temp)
        }else answer.splice(answer.length - arr[i])
    })
    return answer
}