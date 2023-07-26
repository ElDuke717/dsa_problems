/*
sum list

Write a function, sumList, that takes in the head of a linked list containing numbers as an argument. The function should return the total sum of all values in the linked list.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(-1);
const e = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(a);


const sumList = (head) => {
  // declare a variable sum, initially zero
  let sum = 0;
  let current = head;
  // use a while loop to traverse the linked list
  while (current !== null ) {
    // add current.val to sum
    sum += current.val;
    // reassign current's value
    current = current.next;
  }
  // return sum at the end
   return sum;
}; 
  
  // 2 -> 8 -> 3 -> -1 -> 7

console.log(sumList(a)); // 19

const x = new Node(38);
const y = new Node(4);

x.next = y;

// 38 -> 4

console.log(sumList(x)); // 42


console.log(sumList(null)); // 0