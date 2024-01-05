function solution(my_string, queries) {
    
    queries.forEach((el) =>{
        const newArr = [...my_string]
        const [s, e] = el
        newArr.splice(s, e-s+1, newArr.slice(s, e+1).reverse().join(""))
        my_string = newArr.join("")
    })
    return my_string
}