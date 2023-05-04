function solution(rny_string) {
    let word = ""
    rny_string.split('').forEach((el) => {
        if(el==='m'){
            el = "rn"
        }
        word += el
    })
    return word
}