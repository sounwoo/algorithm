function solution(my_string) {
    const a = ['a', 'e', 'i', 'o', 'u']
    
    return my_string.split('').filter((el) => {
      return !a.includes(el)
    }).join("")
  
}