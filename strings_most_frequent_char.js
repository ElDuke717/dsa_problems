/*
most frequent char

Write a function, mostFrequentChar, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.

You can assume that the input string is non-empty.
*/

const mostFrequentChar = (s) => {
    const cache = {};
    // count all characters in the hashmap
    for (let i = 0; i < s.length; i++) {
        cache.hasOwnProperty(s[i]) ?  cache[s[i]] += 1 : cache[s[i]] = 1
    }
    // return the character with the highest count and lowest index
    const mostFreq = Math.max(...Object.values(cache))
    for (let letter in cache) {
        if (cache[letter] === mostFreq) {
            return letter
        }
     }
  };
  

  console.log(mostFrequentChar('bookeeper')) // -> 'e'
  console.log(mostFrequentChar('mississippi')); // -> 'i'
  console.log(mostFrequentChar('riverbed'))// -> 'r'