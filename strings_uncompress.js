/*
Write a function, uncompress, that takes in a string as an argument. The input string will be formatted into multiple groups according to the following pattern:

<number><char>

for example, '2c' or '3a'.

The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively. You may assume that the input string is well-formed according to the previously mentioned pattern.
*/

const uncompress = (s) => {
    // declare string, empty
    let str = '';
    // declare num, number to use for repeating character
    let num = '';
    
    // create helper function to
const tester = (char) => {
  
    let numberValue = parseFloat(char);
    // test if char is converted to a number and is not NaN
    if (!isNaN(numberValue)) {
      console.log(char);
      num += char;
      num = parseFloat(num)
      console.log(num)
    } else {
      str += char.repeat(num)  
      num = '';
    }
    console.log(str)
    console.log(num);

    };
  
     // iterate through string
    for (let i = 0; i < s.length; i++) {
        tester(s[i]);
    }
        // if true, check next character, if true, append to number
        // if false, use repeat method to append following letter to a string
    // return string
    return str;
  };

console.log(uncompress("2c3a1t")); // -> 'ccaaat'
console.log(uncompress("4s2b")); // -> 'ssssbb'
console.log(uncompress("2p1o5p")); // -> 'ppoppppp'
console.log(uncompress("127y")); // ->'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'