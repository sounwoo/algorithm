const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(' ')
    .map(Number);

// let arr = [];

// for (let i = 1; i <= input; i++) {
//     arr.push(i);
// }

// while (arr.length > 1) {
//     arr.shift();
//     arr.push(arr.shift());
// }
// console.log(arr[0]);

// 위코드로 작성시 시간초과가 난다.

// 연결리스트를 활용해서 문제를 풀었다.
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this._size = 0;
    }

    add(value) {
        const newNode = new Node(value);

        if (!this.head) this.head = newNode;
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }

        this.tail = newNode;
        this._size++;

        return newNode;
    }

    getHead() {
        return this.head.value;
    }

    removeHead() {
        this.head = this.head.next;
        this.head.prev = null;
        this._size--;
    }
    getSize() {
        return this._size;
    }
}

// 처음 작성한 코드를 연결리스트로 문제를 푼것 문제풀이의 방향성은 똑같다.
const node = new LinkedList();

for (let i = 1; i <= input; i++) {
    node.add(i);
}
while (node.getSize() !== 1) {
    node.removeHead();
    node.add(node.getHead());
    node.removeHead();
}

console.log(node.getHead());
