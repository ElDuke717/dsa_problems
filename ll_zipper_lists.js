/*
zipper lists

Write a function, zipperLists, that takes in the head of two linked lists as arguments. The function should zipper the two lists together into single linked list by alternating nodes. If one of the linked lists is longer than the other, the resulting list should terminate with the remaining nodes. The function should return the head of the zippered linked list.

Do this in-place, by mutating the original Nodes.

You may assume that both input lists are non-empty.
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
a.next = b;
b.next = c;
// a -> b -> c

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;
// x -> y -> z



// include logic in while loop to add node and skip if one is missing

const zipperLists = (head1, head2) => {
    // assign head1 the value of current
    let current1 = head1;
    let current2 = head2;
    // assign holder to hold the value of current.next
    let tail = null;
    while (current1 || current2) {
      
     
    }
    // return head of the zippered list
    
  };

  zipperLists(a, x);
// a -> x -> b -> y -> c -> z