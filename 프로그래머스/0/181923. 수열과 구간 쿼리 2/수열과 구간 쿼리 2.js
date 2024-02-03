function solution(arr, queries) {
    return queries.reduce((acc,cur) =>{
        const [s,e,k] = cur
        const temp = arr.slice(s,e+1).filter(el => el > k)
        const result = temp.length ? Math.min(...temp): -1
        return[...acc,result]
    },[])
}
