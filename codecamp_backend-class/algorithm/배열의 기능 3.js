// **`문제 설명`**
// 주어진 fruits 배열의 모든 요소에 "맛있는" 이라는 문자열을 추가하세요.

// **`입력 인자`**
// - X

// **`주의 사항`**
// - X

// **`예상 결과`**
// console.log(fruits) // ["맛있는 사과", "맛있는 바나나"]

let fruits = ['사과', '바나나'];

fruits = fruits.map((x) => {
    return '맛있는 ' + x;
});

console.log(fruits);
