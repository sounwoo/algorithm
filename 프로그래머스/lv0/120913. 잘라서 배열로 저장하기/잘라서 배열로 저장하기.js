function solution(my_str, n) {
    const leng = my_str.length
    my_str = my_str.split('')
    let result = [];
    for(let i = 0; i < Math.ceil(leng / n); i++){
        if(my_str.length > n){
          result.push(my_str.splice(0,n).join(''))
        }else{
          result.push(my_str.join(''))
        }
    }
    return result 
}