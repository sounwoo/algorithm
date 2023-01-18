function solution(n){
    // let str = n.toString()

    // for(let i in str){
    //     answer += Number(str[i]);
    // }
    return n.toString().split("").reduce((acc, cur) =>{
       return acc + Number(cur)

    },0)
}