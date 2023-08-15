/*
create linked list

Write a function, createLinkedList, that takes in an array of values as an argument. The function should create a linked list containing each element of the array as the values of the nodes. The function should return the head of the linked list.
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const createLinkedList = (values) => {
    if (values.length === 0) return null;
  // make first element the head
  let head = new Node(values[0]);

  // assign head to current
  let current = head;
  // iterate through the array
  for (let i = 1; i < values.length; i += 1) {
    // create a new Node for each element, append to existing
    current.next = new Node(values[i]);
    current = current.next;
  }
  // return the head of the list
  return head;
};

console.log(createLinkedList(['h', 'e', 'y']));
// h -> e -> y

console.log(createLinkedList([1, 7, 1, 8]));

console.log(createLinkedList(['a']));
// a

console.log(createLinkedList([]));
