function solution(name, yearning, photo) {
    const obj = {}
    const result = []
    name.forEach((el,i) => obj[el] = yearning[i])
    
    photo.forEach((els) =>{
      let temp = 0
      els.forEach((el) => {if(obj[el]) temp += +obj[el]})
      result.push(temp)
    })
    return result
}