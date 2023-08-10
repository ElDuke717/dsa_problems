/**
longest streak

Write a function, longestStreak, that takes in the head of a linked list as an argument. The function should return the length of the longest consecutive streak of the same value within the list.
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Function to number of repeated values in a linked list
 * @param {Object|null} head - the head node a linked list
 * @returns {number} - Count of all the repeated numbers of a linked list
 */

const longestStreak = (head) => {
  if (head === null) return 0;
  let current = head;
  let count = 0;
  // array counts keeps track of counts
  const counts = [];
  // value is assigned the value of head
  let value = head.val;
  // iterate through,
  while (current) {
    // if current.val is not equal to current
    if (current.val !== value) {
      //reassign value;
      value = current.val;
      // push count to array
      counts.push(count);
      // reset count to zero
      count = 0;
    }
    // increment count
    count += 1;
    // reassign current
    current = current.next;
  }
  // push the last count to the array
  counts.push(count);
  // return Math.max of array
  return Math.max(...counts);
};

// const a = new Node(5);
// const b = new Node(5);
// const c = new Node(7);
// const d = new Node(7);
// const e = new Node(7);
// const f = new Node(6);

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;

// // 5 -> 5 -> 7 -> 7 -> 7 -> 6

// console.log(longestStreak(a)); // 3

// const g = new Node(3);
// const h = new Node(3);
// const i = new Node(3);
// const j = new Node(3);
// const k = new Node(9);
// const l = new Node(9);

// g.next = h;
// h.next = i;
// i.next = j;
// j.next = k;
// k.next = l;

// console.log(longestStreak(g)); // 4

const m = new Node(9);
const n = new Node(9);
const o = new Node(1);
const p = new Node(9);
const q = new Node(9);
const r = new Node(9);

m.next = n;
n.next = o;
o.next = p;
p.next = q;
q.next = r;

// 9 -> 9 -> 1 -> 9 -> 9 -> 9

console.log(longestStreak(m)); // 3
