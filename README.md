# Data Structures and Algorithms

This repo contains the implementation of various data structures and algorithms in JavaScript.  It is intended to be used as a reference for me and others learning data structures and algorithms.  It is also a source of example problems for reference and practice, but also for an application that I'm building with Svelte to help me learn Svelte and to help others learn data structures and algorithms.

The end goal is to have an app that will function like a textbook or reference for Data Structures and Algorithms.

## Getting Started

This repo will eventually be a site that will have sections for each data structure and algorithm.  Each section will have a description of the data structure or algorithm, a list of operations, and examples of each operation written in JavaScript.  

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Jest](https://jestjs.io/)


## Introduction

### What is an Algorithm?

This word may scare you and bring back memories of struggling or being confused in math class.  But don't worry, algorithms are not as difficult are as lame as they sound.

An algorithm is a set of step by step instructions or set of rules to be followed to solve a problem.  They are common in mathematics and were used way before computers used them (in fact, the Babylonians, Egyptians and Greeks all used them).  In the context of computer science and programming, an algorithm is a sequence of computational steps or instructions that transform input into output. Algorithms are used in computer science to solve problems and to manipulate data in various ways, such as searching and sorting data.  They are also used to control the flow of programs in languages like JavaScript.


An algorithm has the following characteristics:

1. **Well-Defined Inputs**: The algorithm should be clear about the required inputs.

2. **Well-Defined Outputs**: For each set of inputs, the algorithm produces a clear and definite set of outputs.

3. **Definiteness**: Each step in the algorithm must be clear and unambiguous.

4. **Finiteness**: The algorithm should have a finite number of steps. It should not run indefinitely and must stop after a finite time.

5. **Effectiveness**: The algorithm should be simple enough that it can in principle be followed by a person using only pencil and paper. It is not enough that each operation (step) be definite, but it must also be feasible or executable.

Algorithms form the backbone of most of the software programs and can be implemented in various programming languages. They are primarily used in fields such as data analysis, machine learning, data mining, and others to process and manipulate data in a meaningful way.

Here is an example of a simple algorithm to add two numbers:

```javascript
// add two numbers
function add(a, b) {
  return a + b;
}

// test
console.log(add(2, 3)); // 5
```
In the above example, the algorithm is the function `add` which takes two numbers as inputs and returns the sum of the two numbers as output.  Pretty simple and straightforward.  Let's look at another example.

```javascript
// find the largest number in an array
function findLargest(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

// test
console.log(findLargest([1, 2, 3, 4, 5])); // 5
```
In this algorithm, we are just telling the computer to find the largest number in an array of numbers.  We do this by looping through the array and comparing each number to the current largest number.  If the current number is larger than the current largest number, we set the current number as the largest number.  We continue this process until we have looped through the entire array.  At the end, we return the largest number.

Again, we are giving the computer a set of instructions to follow to solve a problem.  Notice that there are well-defined inputs (the array), well defined outputs(the largest number), definiteness (each step is clear and unambiguous), finiteness (the algorithm will stop after a finite time), and effectiveness (the algorithm is simple enough to be carried out by a person using only pencil and paper, with enough diligence and time).

Lastly, let's look at an elegant ancient algorithm from Euclid:
    
```javascript
// Euclid's algorithm to find the greatest common divisor of two numbersfunction function gcd - greatest common divisor
 function gcd(a, b) {
  // If b is 0, a is the gcd
  if (b === 0) {
    return a;
}
  // Otherwise, recursively call the function, swapping the inputs
  else {
    return gcd(b, a % b);
  }
}

// test
console.log(gcd(270, 192));  // Outputs: 6
```

This algorithm is a bit more complex than the previous two, but it is still simple enough to be carried out by a person using only pencil and paper.  It is also a good example of recursion.

In summary, an algorithm is a set of step by step instructions or set of rules to be followed to solve a problem.  They are used in computer science to solve problems and to manipulate data in various ways, such as searching and sorting data.  Algorithms must have well-defined inputs and outputs, definiteness, finiteness, and effectiveness. They are also used to control the flow of programs in languages like JavaScript.


### What is a Data Structure?
A data structure is a way of organizing data so that it can be used efficiently.  It is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data.  Data structures are used to organize data to suit a specific purpose.  For example, we can store a list of items having the same data-type using the array data structure.

### Linked List

#### Singly Linked List

#### Doubly Linked List

### Stack

### Queue

### Tree

#### Binary Tree

#### Binary Search Tree

### Depth First Search

### Breadth First Search


## Algorithms

### Big O Notation

#### Time Complexity

#### Space Complexity

### Recursion

### Sorting

#### Bubble Sort

#### Selection Sort

#### Insertion Sort

#### Merge Sort

#### Quick Sort

#### Heap Sort

### Searching

#### Linear Search

#### Binary Search

### Graph

#### Breadth First Search

#### Depth First Search