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

  // merge the lists head1 then head2 added to the end
  // make a sorting alorithm for the nodes
  // 
  
  const mergeLists = (head1, head2) => {
    // if there's no first list
    if (!head1) {
        return head2;
    }
    // use while loop to find the end of the first linked list
    let current = head1;
    while (current.next) {
        current = current.next;
    }
    console.log(current)
    //append second list to the first
    current.next = head2;
    console.log(current.next)
    return head1

  };

  console.log(mergeLists(a, q));

