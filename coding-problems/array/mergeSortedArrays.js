// @desc:   Given 2 sorted arrays, merge them into a single sorted array
// @input:  2 sorted arrays
// @output: 1 sorted array

// @time-complexity:    O(n)
// @space-complexity:   O(n)
function mergeSortedArrays(arr1, arr2) {
  let [i, j] = [0, 0];
  const mergedArray = [];

  // Compare both arrays until elements are present in both
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  // Add the remaining items from arr1 or arr2 to the merged array
  return mergedArray.concat(arr1.slice(i)).concat(arr2.slice(j));
}
