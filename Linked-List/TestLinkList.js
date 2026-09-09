import LinkedList from './LinkList.js';

console.log("===== 1. ตรวจ Class =====");
console.log(LinkedList);
console.log(typeof LinkedList);

let myLinkedList = new LinkedList(1);

console.log("===== 2. หลังสร้าง LinkedList =====");
console.log(myLinkedList);
console.log("head:", myLinkedList.head);
console.log("tail:", myLinkedList.tail);
console.log("length:", myLinkedList.length);
console.log("push:", typeof myLinkedList.push);
console.log("pop:", typeof myLinkedList.pop);
console.log("unshift:", typeof myLinkedList.unshift);

myLinkedList.push(2);

console.log("===== 3. หลัง push(2) =====");
console.log(myLinkedList);
console.log("head:", myLinkedList.head);
console.log("tail:", myLinkedList.tail);
console.log("length:", myLinkedList.length);

myLinkedList.pop();

console.log("===== 4. หลัง pop() =====");
console.log(myLinkedList);
console.log("head:", myLinkedList.head);
console.log("tail:", myLinkedList.tail);
console.log("length:", myLinkedList.length);

myLinkedList.unshift(0);

console.log("===== 5. หลัง unshift(0) =====");
console.log(myLinkedList);
console.log("head:", myLinkedList.head);
console.log("tail:", myLinkedList.tail);
console.log("length:", myLinkedList.length);

console.log("get(0):", myLinkedList.get(0));

myLinkedList.set(0, 5);

console.log("===== 6. หลัง set(0, 5) =====");
console.log(myLinkedList);

console.log("===== 7. ตรวจ Methods =====");
console.log("push:", typeof myLinkedList.push);
console.log("pop:", typeof myLinkedList.pop);
console.log("unshift:", typeof myLinkedList.unshift);
console.log("shift:", typeof myLinkedList.shift);
console.log("get:", typeof myLinkedList.get);
console.log("set:", typeof myLinkedList.set);
console.log("insert:", typeof myLinkedList.insert);
console.log("remove:", typeof myLinkedList.remove);
