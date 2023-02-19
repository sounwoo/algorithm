function solution(cipher, code) {
    
  let word = ''
  const codelength = code
  while(code <= cipher.length){
    word += cipher.slice(code-1,code)
    code = codelength+code
  }
  return word
}