function solution(spell, dic) {
    const answer = dic.filter((el) =>{
      const a = spell.filter((els) =>{        
        return el.includes(els)
      })      
      return a.join('')  === spell.join('')
    })
    return answer.length ? 1 : 2
}