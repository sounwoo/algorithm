function solution(arr, queries) {
    return queries.reduce((acc, cur) => {
        const copyArr = [...acc]
        const [s, e, k] = cur
        return copyArr.map((el, elIdx) => {
            return elIdx >= s && elIdx <= e && elIdx%k === 0 ?
                 el+1 : el
        })
    }, arr)
}