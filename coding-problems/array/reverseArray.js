// @desc:   Given an array, reverse the elements inside it
// @input:  An array of n elements
// @output: An array with elements in reversed order

// Without built in reverse() method
// @time-complexity:    O(n)
// @space-complexity:   O(n)
function reverseArray(arr) {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

// With built in function
const reverseArrayBuiltIn = (arr) => arr.reverse();
