// declare decimal to binary, takes a number
// declare let variable temp first assigned to number
// declare bin, assigned to an array that will hold either 1 or 0
// iterate through the array, if temp is greater than or equal to 2 to the power of 7 minus the current index element, push 1 to the bin, reassign temp to value of subtraction, otherwise push 0 to the bin
// return bin

function decimalToBinary(number) {
  let temp = number;
  let bin = '';
  for (let i = 0; i < 8; i++) {
    if (temp >= 2 ** (7 - i)) {
      temp = temp - 2 ** (7 - i);
      bin += '1';
    } else {
      bin += '0';
    }
  }
  return bin;
}

console.log(decimalToBinary(244)); // 11110100
console.log(decimalToBinary(192)); // 11000000
console.log(decimalToBinary(55)); // 00110111
console.log(decimalToBinary(4)); // 00000100
console.log(decimalToBinary(328)); // 11111111

const tester = (counter = 0) => {
  if (decimalToBinary(counter) === '11111111') {
    return counter;
  } else {
    counter++;
    return tester(counter);
  }
};

console.log(tester());
