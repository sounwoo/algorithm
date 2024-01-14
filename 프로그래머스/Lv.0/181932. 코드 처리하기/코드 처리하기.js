function solution(code) {
    let mode = 0
    let ret = ''
    code.split('').forEach((el,idx) =>{
        if(mode) {
            if(el !== '1' && idx % 2 !== 0) ret += el
            if (el === '1') mode = 0
        }else {
            if(el !== '1' && idx % 2 === 0) ret += el
            if(el === '1') mode = 1
        }
    })
    return ret || "EMPTY"
}