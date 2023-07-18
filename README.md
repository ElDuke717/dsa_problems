# Data Structures and Algorithms

This repo contains the implementation of various data structures and algorithms in JavaScript.  It is intended to be used as a reference for me and others learning data structures and algorithms.  It is also a source of example problems for reference and practice, but also for an application that I'm building with Svelte to help me learn Svelte and to help others learn data structures and algorithms.

The end goal is to have an app that will function like a textbook or reference for Data Structures and Algorithms.

## Getting Started

This repo will eventually be a site that will have sections for each data structure and another for algorithms.  Each section will have a description of the data structure or algorithm, a list of operations, and examples of each operation written in JavaScript.  

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Jest](https://jestjs.io/)


## Introduction

## What is an Algorithm?

When you think of the word "algorithm", it may bring back bad memories of math class or it may sound like computer-science intimidating jargon. It may seem like an even more abstract concept that would be hard to understand, so best left avoided and not understood.  But in reality, algorithms are not as difficult to understand as you might initially think. In fact, you probably use algorithms every day without even realizing it.  In this article, we will look at what an algorithm is, what it does, and how it is used in computer science and programming.


### Definition

_An algorithm is a set of step by step instructions or set of rules to  followed to solve a problem_.  Algorithms are common in mathematics and were used way before computers used them (in fact, the Babylonians, Egyptians and ancient Greeks all used them).  They are essential for completing any sort of mathematical operation, from simple addition to more complex operations like finding the greatest common divisor of two numbers.

Essentially, an algorithm is a set of instructions or procedures to follow when attempting to solve some replicable problem or operation.  The word "algorithm" sounds prohibitively mathematical and technical, but really it's just a set of instructions to follow.  You could have a bread making or shoe-tying algorithm, for example.

In the context of computer science and programming, an algorithm is a sequence of computational steps or instructions that transform input into output. Algorithms are used in computer science to solve problems and to manipulate data in various ways, such as searching and sorting data.  They are also used to control the flow of programs.


An algorithm has the following characteristics:

1. **Well-Defined Inputs**: The algorithm should be clear about the required inputs.

2. **Well-Defined Outputs**: For each set of inputs, the algorithm produces a clear and definite set of outputs.

3. **Definiteness**: Each step in the algorithm must be clear and unambiguous.

4. **Finiteness**: The algorithm should have a finite number of steps. It should not run indefinitely and must stop after a finite amount of time.

5. **Effectiveness**: The algorithm should be simple enough that it can in principle be followed by a person using only pencil and paper. It is not enough that each operation (step) be definite, but it must also be feasible or executable.

Algorithms form the backbone of most of the software programs and are implemented in various programming languages. They are used by computers to do pretty much everything, but also in fields such as data analysis, machine learning, data mining, and others to process and manipulate data in a meaningful way.

### Examples

The first example we'll look at is how to make bread:
1. Gather ingredients - flour, sugar, water, salt and yeast.
2. Measure out ingredients 
3. Mix ingredients together
4. Knead dough
5. Let dough rise
6. Punch down dough
7. Shape dough
8. Bake dough -> bread
9. Let bread cool
10. Slice bread and make a sandwich

This is an example of an algorithm with discrete steps and defined inputs and outputs.  If you consistently follow the steps (it's actually a bit more involved, you would need a recipe to get the ingredient quantities, for example) you should expect to get bread every time.  If you don't follow the steps, the bread-making algorithm, you will not get bread.  That makes for one sad sandwich.

Here is an example of a simple algorithm to add two numbers:

```javascript
// add two numbers
function add(a, b) {
  return a + b;
}

// output
console.log(add(2, 3)); // 5
```
In the above example, the algorithm is the function `add` which takes two numbers as inputs and returns the sum of the two numbers as output.  Pretty simple and straightforward.  Let's look at another example.

```javascript
// find the largest number in an array
function findLargest(arr) {
  // start with the first element in the array
  let largest = arr[0];
  // loop over the rest of the array
  for (let i = 1; i < arr.length; i++) {
    // if the current element value is greater than the largest value
    if (arr[i] > largest) {
      // reassign the largest value to the current element value  
      largest = arr[i];
    }
  }
  // return the largest value
  return largest;
}

// output
console.log(findLargest([1, 2, 3, 4, 5])); // 5
```

This one is a bit more complex, but not too hard to understand if you know the syntax.  

In this algorithm, we are just telling the computer to find the largest number in an array of numbers.  We do this by looping through the array and comparing each number to the current largest number.  If the current number is larger than the current largest number, we set the current number as the largest number.  We continue this process until we have looped through the entire array.  At the end, we return the largest number.

Again, we are giving the computer a set of instructions (in Javascript using either the Node.js Javascript engine or browser to interpret the code for the computer) to follow to solve a problem.  Notice that there are well-defined inputs (the array), well defined outputs(the largest number), definiteness (each step is clear and well defined), finiteness (the algorithm will stop after a finite time), and effectiveness (the algorithm is simple enough to be carried out by a person using only pencil and paper, with enough diligence and time).

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

// output
console.log(gcd(270, 192));  // 6
```

This algorithm is a bit more complex than the previous two, but it is still simple enough to be followed by a person line by line, if they know how recursion works! It is also a good example of recursion (where the function calls itself to complete an operation, out of the scope of this article).

In summary, an algorithm is a set of step by step instructions or  rules to be followed to solve a problem.  They are used in computer science to solve problems and to manipulate data in various ways, such as searching and sorting data.  Algorithms must have well-defined inputs and outputs, definiteness, finiteness, and effectiveness. They are also used to control the flow of programs in programming languages like JavaScript, Python, C++, and pretty much all others.  Understanding what an algorithm is at its basic level is essential to understanding computer science and programming.  Not only that, thinking of things in terms of algorithms may even help you to think through your everyday problems and tasks in a more logical and systematic way.


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