/*
intersection

Write a function, intersection, that takes in two arrays, a,b, as arguments. The function should return a new array containing elements that are in both of the two arrays.

You may assume that each input array does not contain duplicate elements.
*/

// Brute force solution - the includes method essentially makes a nested loop
const intersectionBrute = (a, b) => {
    // declare intersections, an empty array
    const intersections = [];
    // iterate through the array a
    for (let i = 0; i < a.length; i++) {
        // if b includes array at i, push array at i
        if (b.includes(a[i])) {
            intersections.push(a[i])
        }
    }
    // return intersections
    return intersections; 
  };

// use a Set instead so we can use the has method
// the lookup is much faster!  It goes from 2 seconds down to 300ms to run.
const intersection = (a, b) => {
// declare intersections, an empty array
const intersections = [];
// declare bSet - a set made from array b
const bSet = new Set(b)
// iterate through the array a
for (let i = 0; i < a.length; i++) {
    // if b includes array at i, push array at i
    if (bSet.has(a[i])) {
        // push the intersecting values to the array
        intersections.push(a[i])
    }
}
// return intersections
return intersections; 
};


console.log(intersection([4,2,1,6], [3,6,9,2,10])) // -> [2,6]
console.log(intersection([2,4,6], [4,2])) // -> [2,4]
console.log(intersection([4,2,1], [1,2,4,6]) )// -> [1,2,4]
console.log(intersection([0,1,2], [10,11])) // -> []

const a = [];
const b = [];
for (let i = 0; i < 50000; i += 1) {
  a.push(i);
  b.push(i);
}
console.log(intersection(a, b))