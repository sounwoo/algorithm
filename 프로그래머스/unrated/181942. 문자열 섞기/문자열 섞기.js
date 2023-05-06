function solution(str1, str2) {
    return [...str1].map((el,i) => el + str2[i]).join('')
    
}