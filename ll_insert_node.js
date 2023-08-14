/**
insert node

Write a function, newNode, that takes in the head of a linked list, a value, and an index. The function should insert a new node with the value into the list at the specified index. Consider the head of the linked list as index 0. The function should return the head of the resulting linked list.

Do this in-place.

You may assume that the input list is non-empty and the index is not greater than the length of the input list.
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Inserts a node into a linked list at a specific index
 *
 * @param {Object} head - head of linked list
 * @param {any} value - value to add to new Node
 * @param {number} index - index of where to insert new Node
 */

const insertNode = (head, value, index) => {
  const newNode = new Node(value);
  if (index === 0) {
    newNode.next = head;
    return newNode;
  }
  // i tracks the index, initially set to zero
  let i = 0;

  // assign current to head
  let current = head;
  
  // iterate through the linked list
  while (current) {
    // increment i
    i += 1;
    // when i = index, add node with value by reassiging current
    if (i === index) {
      newNode.next = current.next;
      current.next = newNode;
    }

    // reassign current
    current = current.next;
  }
  // return head
  return head;
};

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

console.log(insertNode(a, 'x', 2));
// a -> b -> x -> c -> d

const e = new Node('e');
const f = new Node('f');

e.next = f;

// e -> f

console.log(insertNode(e, 'z', 0));
// z -> e -> f
