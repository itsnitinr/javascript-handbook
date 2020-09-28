// @input:      An array of values and value to search for
// @output:     Index of value if found, else -1
// @time-cplx:  O(n)
// @spc-cplx:   O(1)
function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}
