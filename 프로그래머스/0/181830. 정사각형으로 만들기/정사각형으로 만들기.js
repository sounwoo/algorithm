function solution(arr) {
    const line = arr.length
    const row = arr[0].length
    
    if(line > row){
        const zero = Array(line - row).fill(0)
        return arr.map(el => [...el, ...zero])
    }
    if(row > line){
        for(let i = 0; i < row - line; i++){
            const zero = Array(row).fill(0)
            arr.push(zero)
        }
    }
    return arr
    
}