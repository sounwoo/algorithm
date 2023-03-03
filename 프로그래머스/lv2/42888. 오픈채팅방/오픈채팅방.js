function solution(record) {
    record = record.map( el => el.split(" "))
    const user = record.reduce((acc,cur) =>{
        const[action, uid, nickname] = cur
        if ( nickname ) acc[uid] = nickname
        return acc
    },{})
    return record.reduce((acc,cur) =>{
        const[action, uid] = cur
        if( action !== "Change"){
            acc.push(`${ user[ uid ] }님이 `+(
            action === "Enter" ? "들어왔습니다.":"나갔습니다."
            ))
        }
        return acc
    },[])
    
    
    
//     const answer = [];
//     const user = {};
//     for(let i = 0; i <record.length; i++){
//         const[action, uid, nickname] = record[i].split(" ")
//         if( nickname ) user[ uid ] = nickname
//         if( action !== "Change" )answer.push({ action, uid })
//     }
//     for(let idx in answer){
//         answer[ idx ] = user[ answer[ idx ].uid ] + (
//         answer[ idx ].action === "Enter" ? "님이 들어왔습니다.": "님이 나갔습니다."  
//         )
//     }
//     return answer
    
    // let obj = {}
    // record.forEach((el) => {
    //     if(el.split(" ")[2]) obj[el.split(" ")[1]] = el.split(" ")[2]
    // })
    // const result = record.map((el)=>{
    //   const [action,user] = el.split(" ")
    //   if(action === "Enter"){
    //     return `${obj[user]}님이 들어왔습니다.`
    //   }else if(action === "Leave"){
    //     return `${obj[user]}님이 나갔습니다.`
    //   }
    // })
    // return result.filter((el) => el)
}
