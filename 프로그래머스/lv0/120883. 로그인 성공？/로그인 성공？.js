function solution(id_pw, db) {
  
  let user = {}, result = '';
  
  
for(let i = 0; i <db.length; i++){
  user[db[i][0]] = db[i][1]
}
  
  for(let i in user){
    console.log(i , user[i], id_pw)
    if(id_pw[0] === i && id_pw[1] === user[i]) {
      result = "login"
      break
    }
    else if(id_pw[0] === i && id_pw[1] !== user[i]) {
      result = "wrong pw"
      break
    }
    else {
      result = "fail"
    }
  }
  return result
}