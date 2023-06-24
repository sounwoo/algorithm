function solution(myStr) {
    myStr = myStr.replace(/a|b|c/g," ").split(" ").filter((el) => el)
    return myStr.length ? myStr : ["EMPTY"]
}