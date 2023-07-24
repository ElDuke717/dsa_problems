/*
Write a function, compress, that takes in a string as an argument. The function should return a compressed version of the string where consecutive occurrences of the same characters are compressed into the number of occurrences followed by the character. Single character occurrences should not be changed.

'aaa' compresses to '3a'
'cc' compresses to '2c'
't' should remain as 't'

You can assume that the input only contains alphabetic characters.
*/

// use a hashmap/object to count all letters in the string
// make a string based on the input of the hashmap


const compress2 = (s) => {
    // object to hold counts
    const counts = {};
    // initiate string to an empty string
    let string = '';
    // iterate over string, count letters
    for (let i = 0; i < s.length; i++) {
        if (counts.hasOwnProperty(s[i])) {
            counts[s[i]] += 1;
        } else {
            counts[s[i]] = 1;
        }
    }
    console.log(counts);
    // use for in loop to create string from object
    for (let letter in counts) {
        if (counts[letter] > 1) string += counts[letter];
        string += letter;
    }
    return string;
  };

console.log(compress2('ccaaatsss')); // -> '2c3at3s'
// console.log(compress('ssssbbz')); // -> '4s2bz'
// console.log(compress('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy')); 
// // -> '127y'


// need to count the letters in order, not just get the absolute number.
const compress = (s) => {
    // declare count, set to 1
    let count = 1;
    // declare string to hold empty string
    let string = ''
    // iterate over the string
    for (let i = 0; i < s.length; i++) {
    // increment count if letter is the same as previous letter
      if (s[i+1] === s[i]) {
        count += 1;
      } else {
        // add count to string
        if (count >1 )string += count;
        // add s[i] to string
        string += s[i];
        // reset count to zero
        count = 1;
      }
    // if letter is different, add count to string, reset count to zero
    }
    // return string
    return string;
  };

console.log(compress('ccaaatsss')); // -> '2c3at3s'
// console.log(compress2('ssssbbz')); // -> '4s2bz'
// console.log(compress2('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy')); 