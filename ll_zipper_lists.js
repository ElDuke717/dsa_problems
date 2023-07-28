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
    let current1 = head1.next; // Start from the second node of the first list.
    let current2 = head2; // Start from the head of the second list.
    let prev1 = head1; // Keep track of the previous node in the first list.
  
    // Iterate through both lists until one of them reaches the end.
    while (current1 !== null && current2 !== null) {
      // Save the next nodes in each list.
      const next1 = current1.next;
      const next2 = current2.next;
  
      // Insert the node from the second list after the current node in the first list.
      prev1.next = current2;
      current2.next = current1;
  
      // Move the pointers to the next nodes in both lists.
      prev1 = current1;
      current1 = next1;
      current2 = next2;
    }
  
    // If there are remaining nodes in the second list, attach them after the last node of the first list.
    if (current2 !== null) {
      prev1.next = current2;
    }
  
    // Return the head of the zippered list (head1).
    return head1;
  };

console.log(zipperLists(a, x));
// a -> x -> b -> y -> c -> z

const zipperListsRecursive =  (head1, head2) => {
    // if both heads are null, return null;
    if (head1 === null && head2 === null) return null;
    if (head1 === null) return head2;
    if (head2 === null) return head1;
    const next1 = head1.next;
    const next2 = head2.next;
    head1.next = head2;
    head2.next = zipperLists(next1, next2);
    return head1;
  };