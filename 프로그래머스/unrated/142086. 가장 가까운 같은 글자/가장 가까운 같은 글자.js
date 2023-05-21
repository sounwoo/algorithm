function solution(s) {
    let temp = ''
    
    return [...s].map((el, i) =>{
        if(!temp.includes(el)){
            temp+=el
            return -1
        }else{
            const result =  i - temp.lastIndexOf(el)
            temp+=el
            return result
        }
        
    })
}