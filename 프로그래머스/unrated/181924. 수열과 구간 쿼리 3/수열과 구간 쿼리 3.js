function solution(arr, queries) {
    // queries.forEach((el) =>{
    //     const [i,j] = el
    //     const temp = arr[i]
    //     arr[i] = arr[j]
    //     arr[j] = temp
    // })
    queries.forEach((el) =>{
        [arr[el[0]], arr[el[1]]] = [arr[el[1]], arr[el[0]]]
    })
    return arr
}