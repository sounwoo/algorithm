const num = {
    w : 1,
    s : -1,
    d : 10,
    a : -10,
}

function solution(n, control) {
    
    control.split('').forEach((el) => n += num[el])
    
    return n
}