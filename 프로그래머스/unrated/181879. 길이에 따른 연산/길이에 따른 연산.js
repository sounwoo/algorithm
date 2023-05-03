function solution(num_list) {
    return num_list.reduce((acc, cur)=> num_list.length >=11 ? acc+cur:acc*cur)
    // return num_list.length >= 11 
    //     ? num_list.reduce((acc, cur) => acc + cur,0)
    //     : num_list.reduce((acc, cur) => acc * cur,1)
}