function solution(arr, query) {
    let result = [...arr]
    
    query.forEach((_,index)=> {
      index % 2===0 ? result.splice(query[index]+1) :result.splice(0,query[index])
    })
    return result
}