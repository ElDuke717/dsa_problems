/*
linked list values

Write a function, linkedListValues, that takes in the head of a linked list as an argument. The function should return an array containing all values of the nodes in the linked list.

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

  const linkedListValues = (head) => {
    // declare results array, empty at first
    const results = [];
    // declare current
    let current = head;
    // use while loop to iterate through the list
    while (current) {      
    // push value of each to array
    results.push(current.val);
    // reassign current
    current = current.next;
    }
    // return array
    return results;
  };

console.log(linkedListValues(a)) // [a, b, c, d]
console.log(linkedListValues(null)) // []