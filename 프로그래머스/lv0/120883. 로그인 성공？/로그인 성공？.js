function solution(id_pw, db) {
  
  let user = {}, [id, pw] = id_pw
  
  
for(let i = 0; i <db.length; i++){
  user[db[i][0]] = db[i][1]
}
  return user[id] ? (user[id] === pw ? "login" : "wrong pw") : 'fail';
}