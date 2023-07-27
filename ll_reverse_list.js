/*
reverse list

Write a function, reverseList, that takes in the head of a linked list as an argument. The function should reverse the order of the nodes in the linked list in-place and return the new head of the reversed linked list.
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
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// a -> b -> c -> d -> e -> f

// iterate through the list
// reassign the next property of each node to the previous node
// continue until they are all reversed

const reverseList = (head) => {
    let current = head;
    let next = null;
    let prev = null; // Initialize prev variable
  
    while (current) {
      // Store the next node
      next = current.next;
  
      // Reverse the links: swap prev and next pointers
      current.next = prev;
      current.prev = next; // Set the prev pointer to the next node
  
      // Move to the next node
      prev = current;
      current = next;
    }
  
    // The new head will be the last node we visited (prev)
    return prev;
  };
  

console.log(reverseList(a)); // f -> e -> d -> c -> b -> a