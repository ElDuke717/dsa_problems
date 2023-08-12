/**
remove node

Write a function, removeNode, that takes in the head of a linked list and a target value as arguments. The function should delete the node containing the target value from the linked list and return the head of the resulting linked list. If the target appears multiple times in the linked list, only remove the first instance of the target in the list.

Do this in-place.

You may assume that the input list is non-empty.

You may assume that the input list contains the target.
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const removeNode = (head, targetVal) => {
  // reassign head if val is same as targetVal
  if (head.val === targetVal) {
    head = head.next;
  }
  // assign current
  let current = head;
  // reassign current if head has target val

  // iterate through nodes.
  while (current) {
    // if val matches targetVal, assign next to next.next
    // console.log('current.next.val', current.next.val);
    if (current.next !== null && current.next.val === targetVal) {
      current.next = current.next.next;
      return head;
    }
    current = current.next;
  }
  // return the head?
  return head;
};

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// a -> b -> c -> d -> e -> f

console.log(removeNode(a, 'c'));
// a -> b -> d -> e -> f

const node1 = new Node("h");
const node2 = new Node("i");
const node3 = new Node("j");
const node4 = new Node("i");

node1.next = node2;
node2.next = node3;
node3.next = node4;

// h -> i -> j -> i

console.log(removeNode(node1, "i"));
// h -> j -> i



const q = new Node('q');
const r = new Node('r');
const s = new Node('s');

q.next = r;
r.next = s;

// q -> r -> s

console.log(removeNode(q, 'q'));
// r -> s

const t = new Node('t');

// t

console.log(removeNode(t, 't'));
// null
