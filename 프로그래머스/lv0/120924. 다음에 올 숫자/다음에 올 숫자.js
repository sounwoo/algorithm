function solution(common) {
  // 제한사항을 보면 common의 길이는 무조건 3이상이다.
  // 또한 등차, 등비가 아닌 경우가 없으므로
  // 인덱스 2번 1번의 차가 인덱스 1번 0번의 차와 같으면 등차수열
  // 다르면 등비수열이다.
  if (common[2] - common[1] === common[1] - common[0]) {
    // 즉, 등차는 마지막 값에 등차 값을 더해주고
    return common.pop() + common[1] - common[0];
  } else {
    // 등비는 마지막 값에 나눠서 구한 등비를 곱해주면 된다.
    // 나누셈에 ()를 친 이유는 계산 순서 때문이다.
    return common.pop() * (common[1] / common[0]);
  }
}