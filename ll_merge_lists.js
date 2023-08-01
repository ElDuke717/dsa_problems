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

  // Make a helper function to merge lists together
  // merge the lists head1 then head2 with merge algoritm
  // 
  // make a sorting alorithm for the nodes - use a mergeSort algorithm
  
  
  const mergeLists = (head1, head2) => {
    // Make a helper function to merge the lists
        const merge = (list1, list2) => {
        // if there's no first list
        if (!list1) {
            return list2;
        }
        // use while loop to find the end of the first linked list
        let current = list1;
        while (current.next) {
            current = current.next;
        }
        //append second list to the first
        current.next = list2;
        // return the linked list
        return list1;
        }
    let combined = merge(head1, head2);
    // function to find the middle of the linked list
    function findMiddle(head) {
        let slow = head;
        let fast = head;
        let prev = null;
      
        while (fast && fast.next) {
          prev = slow;
          slow = slow.next;
          fast = fast.next.next;
        }
      
        // Disconnect the two halves
        if (prev) {
          prev.next = null;
        }
      // slow is now at the middle of the linked list
        return slow;
      }
      // Merge sort for linked lists
      function mergeSortLinkedList(head) {
        if (!head || !head.next) {
          return head;
        }
    }
    const middle = findMiddle(combined);
    const left = mergeSortLinkedList(combined);
    const right = mergeSortLinkedList(middle);

    return merge(left, right);
  };

  console.log(mergeLists(a, q));


/*
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Function to merge two sorted linked lists
function mergeSortedLists(left, right) {
  const dummy = new Node(0);
  let tail = dummy;

  while (left && right) {
    if (left.val < right.val) {
      tail.next = left;
      left = left.next;
    } else {
      tail.next = right;
      right = right.next;
    }
    tail = tail.next;
  }

  tail.next = left || right;
  return dummy.next;
}

// Function to find the middle of the linked list
function findMiddle(head) {
  let slow = head;
  let fast = head;
  let prev = null;

  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  // Disconnect the two halves
  if (prev) {
    prev.next = null;
  }

  return slow;
}

// Merge Sort for linked lists
function mergeSortLinkedList(head) {
  if (!head || !head.next) {
    return head;
  }

  const middle = findMiddle(head);
  const left = mergeSortLinkedList(head);
  const right = mergeSortLinkedList(middle);

  return mergeSortedLists(left, right);
}

*/