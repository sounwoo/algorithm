function solution(arr1, arr2) {
    if (arr1.length === arr2.length) {
        let sum1 = 0,sum2 = 0
        arr1.forEach((el,i) => {
            sum1 +=el 
            sum2 +=arr2[i]
        })
        if(sum1 === sum2) return 0
        return sum1 > sum2 ? 1 : -1
    }
    return arr1.length > arr2.length ? 1 : -1
}