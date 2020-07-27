// @desc:   Given an array of chars, return the first recurring char
// @input:  Array of characters
// @output: First recurring character or undefined

function firstRecurringChar(arr) {
  const charMap = {};
  for (let i = 0; i < arr.length; i++) {
    if (charMap[arr[i]]) {
      return arr[i];
    }
    charMap[arr[i]] = true;
  }
  return undefined;
}
