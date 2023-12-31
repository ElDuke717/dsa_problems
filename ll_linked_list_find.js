/*
linked list find

Write a function, linkedListFind, that takes in the head of a linked list and a target value. The function should return a boolean indicating whether or not the linked list contains the target.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

const linkedListFind = (head, target) => {
    // assign current
    let current = head;
    // iterate through, check if current.val is equal to target
    while (current) {
    // if so, return true
    if (current.val === target) return true;
    // reassign current
    current = current.next;
    }
    // return false
    return false
};


console.log(linkedListFind(a, "c")); // true
console.log(linkedListFind(a, "d")); // true
console.log(linkedListFind(a, "q")); // false