function solution(id_list, report, k) {
  // 신고한 사람이 대상으로 삼은 사람이 누구인지 저장
  // 신고 당한 사람의 누적 신고량을 저장
  const reporter = {} , reportedList = {}
  report = [...new Set(report)]
  
  report.forEach(( el ) => {
    const info = el.split(" ")
    if( !reporter[ info[0] ] ) reporter[ info[0] ] = []
    if( !reportedList[ info[1] ] ) reportedList[ info[1] ] = 0
    
    reporter[ info[0] ].push( info[1] )
    reportedList[ info[1] ] ++; 
    
  })
  
  const answer = id_list.map((id) =>{
    const arr = reporter[ id ] || []
    return arr.reduce((acc, cur)=>{
      return acc + ( reportedList[ cur ] >= k ? 1 : 0 )
    },0)
  })
  return answer
}