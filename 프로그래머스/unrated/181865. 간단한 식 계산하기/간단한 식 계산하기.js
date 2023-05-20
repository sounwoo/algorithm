function solution(binomial) {
    const obj = (a,b,c) => {
        a = Number(a), c = Number(c)
        if(b === "+") return a + c
        else if(b === "*") return a * c
        else if(b === "-") return a - c
    }
    const [a,b,c] = binomial.split(" ")
    return obj(a,b,c)
    // return eval(binomial)
}
