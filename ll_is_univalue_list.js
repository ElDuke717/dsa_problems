/**
 * is univalue list

Write a function, isUnivalueList, that takes in the head of a linked list as an argument. The function should return a boolean indicating whether or not the linked list contains exactly one unique value.

You may assume that the input list is non-empty.
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Function to determine if all the values in a linked list are the same
 * @param {*} head - the head node a linked list
 */

const isUnivalueList = (head) => {
  // assign current to head.val
  let current = head;
  // assign value to the value of the head node
  let value = head.val;
  // iterate through the list
  while (current) {
    // check if val of current node is equal to value, if not return false
    if (current.val !== value) {
      return false;
    }
    // reassign current to current.next
    current = current.next;
  }
  // if so, return true
  return true;;
};

const a = new Node(7);
const b = new Node(7);
const c = new Node(7);

a.next = b;
b.next = c;

// 7 -> 7 -> 7
console.log(a);
console.log(isUnivalueList(a)); // true

const u = new Node(2);
const v = new Node(2);
const w = new Node(3);
const x = new Node(3);
const y = new Node(2);

u.next = v;
v.next = w;
w.next = x;
x.next = y;

// 2 -> 2 -> 3 -> 3 -> 2
console.log(u);
console.log(isUnivalueList(u)); // false
