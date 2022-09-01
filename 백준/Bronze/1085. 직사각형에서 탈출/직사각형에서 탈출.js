const [x, y, w, h] = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(' ')
    .map((e) => Number(e.replaceAll('\r', '')));

let arr = [x, w - x, y, h - y];
// 왼쪽 아래 꼭지점(0,0), 오른쪽 위 꼭지점(w,h) 인 직사각형
// 직사각형 안에 현재 내위치(x,y)
// 직사각형 탈출 x축만큼 이면 왼쪽 변 y축 만큼이면 아랫변
// w = 위쪽 변 -> 현재 x에서부터 w변까지 거리( w - x ), h = 오른쪽 변 -> 현재 y에서부터 h변까지 거리( h - y )
console.log(Math.min(...arr));