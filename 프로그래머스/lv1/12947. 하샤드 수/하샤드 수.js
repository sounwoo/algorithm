function solution(x) {

    const sum = x.toString().split('').reduce((acc,cur)=>{
        return acc + Number(cur)
    },0)
    
    return x % sum == 0 ? true : false 
    
    // let str = x.toString();
    // let sum = 0
    // for(let i in str){
    //     sum += Number(str[i]);
    // }
    // return  (x % sum == 0) ? true : false ;
}