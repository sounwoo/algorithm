function solution(str_list) {
    const index = str_list.findIndex(item => item === 'l' || item === 'r');
    
    
    if(index === -1) return []
    
    return str_list[index] === 'l' ? str_list.slice(0, index): str_list.slice(index + 1);
    
}
