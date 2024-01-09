function solution(ineq, eq, n, m) {
    const sign = eq === "!"? ineq : ineq + eq
    let result = true
    if(sign === '>') result = n > m
    else if(sign === '<') result = n < m
    else if(sign === '<=') result = n <= m
    else result = n >= m
    return result ? 1 : 0
}