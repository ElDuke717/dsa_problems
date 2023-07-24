/*
anagrams

Write a function, anagrams, that takes in two strings as arguments. The function should return a boolean indicating whether or not the strings are anagrams. Anagrams are strings that contain the same characters, but in any order.
*/

const anagrams = (s1, s2) => {
    if (s1.length !== s2.length ) { return false }
    // Make a helper function to make an object for the counts of each letter in each word
    const objectifier = (str) => {
        const obj = {};
        for (let i = 0; i < str.length; i += 1 ) {
            obj[str[i]] ? obj[str[i]] += 1 : obj[str[i]] = 1;
        }
        return obj;
    }
    // use a for in loop to compare the letters and counts
    const obj1 = objectifier(s1);
    const obj2 = objectifier(s2);
    for (let letter in obj1) {
         // if any letter count combo doesn't match, return false
        if (obj1[letter] !== obj2[letter]){
            return false;
        }
    } 
    // return true
    return true
};

console.log(anagrams('restful', 'fluster')); // true
console.log(anagrams('cats', 'tocs')); // false
console.log(anagrams('icecream', 'chocolate')); // -> true
console.log(anagrams('abbc', 'aabc')); // -> false
console.log(anagrams('pp', 'oo')) // -> false
console.log(anagrams('po', 'popp')); // -> false
console.log(anagrams('tax', 'taxi')); // -> false