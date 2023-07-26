/*
get node value

Write a function, getNodeValue, that takes in the head of a linked list and an index. The function should return the value of the linked list at the specified index.

If there is no node at the given index, then return null.
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


const getNodeValue = (head, index) => {
    // declare current, assigned to head
    let current = head;
    // declare counter, assigned zero
    let counter = 0;
    // iterate through ll, while current is truthy
    while (current) {
    // if count is equal to index, return val
     if (counter === index) {
        return current.val;
     }
       current = current.next;
       counter += 1;
    }
    // return null
    return null;
  };

console.log(getNodeValue(a, 2)); // 'c'
console.log(getNodeValue(a, 7)); // null
  
const node1 = new Node("banana");
const node2 = new Node("mango");

node1.next = node2;

// banana -> mango

console.log(getNodeValue(node1, 0)); // 'banana'