function solution(n) {
    let count = 0;
    while(n > 0){
        count ++;
        if (count.toString().split('').includes('3')|| count%3 == 0) continue
        n --;
    }
    return count;
}