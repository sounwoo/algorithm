function solution(arr, queries) {
    queries.forEach((el) =>{
        const [i,j] = el
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    })
    return arr
}