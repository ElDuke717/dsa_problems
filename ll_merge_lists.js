/*
merge lists

Write a function, mergeLists, that takes in the head of two sorted linked lists as arguments. The function should merge the two lists together into single sorted linked list. The function should return the head of the merged linked list.

Do this in-place, by mutating the original Nodes.

You may assume that both input lists are non-empty and contain increasing sorted numbers.
*/

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

  const a = new Node(5);
  const b = new Node(7);
  const c = new Node(10);
  const d = new Node(12);
  const e = new Node(20);
  const f = new Node(28);
  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  e.next = f;
  // 5 -> 7 -> 10 -> 12 -> 20 -> 28
  
  const q = new Node(6);
  const r = new Node(8);
  const s = new Node(9);
  const t = new Node(25);
  q.next = r;
  r.next = s;
  s.next = t;
  // 6 -> 8 -> 9 -> 25

  // Start with a dummy node to be the first to start with for the comparison
  // merge the lists head1 then head2 with merge algoritm
  // 
  // make a sorting alorithm for the nodes - use a mergeSort algorithm
  
  
  function mergeLists(head1, head2) {
    // Create a dummy node to serve as the starting point of the merged list
    const dummyNode = new Node(-1);
    // current is set to the dummy node for the first comparison
    let current = dummyNode;

    // Merge the two lists in sorted order
    while (head1 && head2) {
        if (head1.val <= head2.val) {
            // if head1 value is less than or equal to head2 value, assign current.next to head1
            current.next = head1;
            // head1 is reassigned to value of head1.next
            head1 = head1.next;
        } else {
            // otherwise, current.next is set to head of head2
            current.next = head2;
            head2 = head2.next;
        }
        // move through the list
        current = current.next;
    }

    // Append any remaining nodes from list1 or list2
    if (head1) {
        current.next = head1;
    }
    if (head2) {
        current.next = head2;
    }

    // Return the head of the merged list (skip the dummy node)
    return dummyNode.next;
}

console.log(mergeLists(a,q));

const valuesArray = (head) => {
    let current = head;
    let arr = [];
    while (current) {
        arr.push(current.val);
        current = current.next;
    }
    return arr;
}

console.log(valuesArray(a));