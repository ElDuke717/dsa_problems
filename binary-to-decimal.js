//declare decimal to binary, takes in a binary number as a string
// declare bin, an array that has all the 0's of 1's split onto it
// declare number, initially given a value of zero
// iterate over bin, if element is 1, add 2 raised to 7 minus the index to number
// return number

function binaryToDecimal(binary) {
  let number = 0;
  const bin = binary.split('');
  for (let i = 0; i < bin.length; i++) {
    if (bin[i] === '1') {
      number += 2 ** (7 - i);
    }
  }
  return number;
}

console.log(binaryToDecimal('11000000')); // 192
console.log(binaryToDecimal('00000100')); // 4
console.log(binaryToDecimal('00110111')); // 55
console.log(binaryToDecimal('11110100')); // 244
