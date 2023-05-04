function solution(num_list) {
    // return num_list.indexOf(num_list.filter((el) => {
    //     if(0 > el) return el
    // })[0]) ?? -1
    
    return num_list.findIndex((el) => 0 > el);
}