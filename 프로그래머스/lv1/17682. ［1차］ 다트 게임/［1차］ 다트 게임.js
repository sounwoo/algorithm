const bonus = [ "S", "D", "T" ] // 보너스를 체크하기 위한 배열

function solution(dartResult) {
    let score = ""; // 점수만 뽑아서 저장하는 변수
    let currentScore = 0; // 현재 게임(턴)의 점수를 저장
    let last = false; // 점수를 최종 저장할 시점을 체크
    
    const answer = dartResult.split("")
                    .reduce(( acc, cur, i ) => {
                        if( !isNaN( cur ) ) {
                            // 점수를 먼저 뽑는다.
                            score += cur;
                            last = false; // 새 게임(턴)이 시작되었다.
                        } else if( bonus.includes( cur ) ) {
                            // 보너스 처리
                            score = Number( score );
                            const squared = bonus.indexOf( cur ) + 1
                            currentScore = score ** squared;
                            score = "";
                            
                            if( !isNaN( dartResult[i + 1] ) ||
                              (i + 1) === dartResult.length ) { // 마지막 데이터 체크
                                last = true; // 현재 게임(턴)이 종료되었다.
                            }
                        } else {
                            last = true;
                            // 옵션 처리
                            if( cur === "*" ) {
                                // 스타상이라면
                                currentScore *= 2;
                                if( acc.length > 0 ) {
                                    acc[ acc.length - 1 ] *= 2;
                                }
                            } else {
                                // 아차상이라면
                                currentScore *= -1
                            }
                        }
                        
                        if( last === true ) { // 턴이 종료되었다면 최종적으로 점수를 저장
                            acc.push( currentScore )
                        }
                        return acc
                    }, [])
    
    return answer.reduce((acc, cur) => acc + cur)
}