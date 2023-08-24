/*
Write a function, addLists, that takes in the head of two linked lists, each representing a number. The nodes of the linked lists contain digits as values. The nodes in the input lists are reversed; this means that the least significant digit of the number is the head. The function should return the head of a new linked listed representing the sum of the input lists. The output list should have its digits reversed as well.

You must do this by traversing through the linked lists once.
Say we wanted to compute 621 + 354 normally. The sum is 975:

   621
 + 354
 -----
   975

Then, the reversed linked list format of this problem would appear as:

    1 -> 2 -> 6
 +  4 -> 5 -> 3
 --------------
    5 -> 7 -> 9

 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
// Recursive solution
const addListsR = (head1, head2, carry = 0) => {
  if (head1 === null && head2 === null && carry === 0) {
    return null;
  }
  const val1 = head1 === null ? 0 : head1.val;
  const val2 = head2 === null ? 0 : head2.val;
  const sum = val1 + val2 + carry;
  const nextCarry = sum > 9 ? 1 : 0;
  const digit = sum % 10;
  const resultNode = new Node(digit);

  resultNode.next = addListsR(head1.next, head2.next);
  return resultNode;
};

// Iterative solution
const addLists = (head1, head2) => {
  // Create a dummy head node to simplify building the result linked list.
  const dummyHead = {};
  // Initialize the tail pointer to the dummy head.
  let tail = dummyHead;
  // Initialize the carry to 0, and pointers for the input linked lists.
  let carry = 0;
  let current1 = head1;
  let current2 = head2;

  // Loop until one of the linked lists is exhausted and there's no carry left.
  while (current1 !== null || current2 !== null || carry === 1) {
    // Get the values from the current nodes (or 0 if null) and add the carry.
    const val1 = current1 === null ? 0 : current1.val;
    const val2 = current2 === null ? 0 : current2.val;
    const sum = val1 + val2 + carry;
    // Calculate the new carry (1 if sum is greater than 9, 0 otherwise).
    carry = sum > 9 ? 1 : 0;
    // Calculate the digit value to insert in the new linked list.
    const digit = sum % 10;

    // Create a new node with the calculated digit and append it to the result linked list.
    tail.next = new Node(digit);
    // Move the tail pointer to the newly created node.
    tail = tail.next;

    // Move the input pointers to the next nodes if they exist.
    if (current1 !== null) current1 = current1.next;
    if (current2 !== null) current2 = current2.next;
  }

  // If there's a carry left after the loop, add a new node with value 1.
  if (carry === 1) {
    tail.next = new Node(1);
  }

  // Return the next node of the dummy head, which is the start of the result linked list.
  return dummyHead.next;
};

//   621
// + 354
// -----
//   975

// const a1 = new Node(1);
// const a2 = new Node(2);
// const a3 = new Node(6);
// a1.next = a2;
// a2.next = a3;
// // 1 -> 2 -> 6

// const b1 = new Node(4);
// const b2 = new Node(5);
// const b3 = new Node(3);
// b1.next = b2;
// b2.next = b3;
// // 4 -> 5 -> 3

// console.log(addLists(a1, b1));
// // 5 -> 7 -> 9

const a1 = new Node(1);
const a2 = new Node(4);
const a3 = new Node(5);
const a4 = new Node(7);
a1.next = a2;
a2.next = a3;
a3.next = a4;
// 1 -> 4 -> 5 -> 7

const b1 = new Node(2);
const b2 = new Node(3);
b1.next = b2;
// 2 -> 3

console.log(addLists(a1, b1));
// 3 -> 7 -> 5 -> 7

// const a1 = new Node(9);
// const a2 = new Node(3);
// a1.next = a2;
// // 9 -> 3

// const b1 = new Node(7);
// const b2 = new Node(4);
// b1.next = b2;
// // 7 -> 4

// console.log(addLists(a1, b1));
// 6 -> 8

/*

const addLists = (head1, head2) => {
  // helper function to reverse a linked list
  const reverser = (head) => {
    let prev = null;
    let current = head;

    while (current) {
      let nextNode = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
    }
    return prev; // 'prev' now points to the new head of the reversed list
  };
  const backward1 = reverser(head1);
  console.log(backward1)
  const backward2 = reverser(head2);
  console.log(backward2)
  // make a helper function to get the values from a linked list and make a number from them
  const numberizer = (head) => {
    let current = head;
    let value = '';
    while (current) {
      value = value + current.val;
      current = current.next;
    }
    return +value;
  };

  // result is the sum of helper on both heads
  const result = String(numberizer(backward1) + numberizer(backward2))
    .split('')
    .map(Number);
    console.log(result)

  // use function to make linked list from the array
  const createLinkedList = (values) => {
    if (values.length === 0) return null;
    let head = new Node(values[0]);
    let current = head;
    // for loop makes each value a new node in the linked list
    for (let i = 1; i < values.length; i += 1) {
      current.next = new Node(values[i]);
      current = current.next;
    }
    return head;
  };
  // we need to then reverse the linked list
  return createLinkedList(result);
};

*/
