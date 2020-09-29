// @input:      Sorted array and value to search for
// @output:     Index of value if found, else -1
// @time-cplx:  O(log n)
// @spc-cplx:   O(1)

// ITERATIVE APPROACH
function binarySearch(arr, val) {
  let start = 0,
    end = arr.length - 1,
    middle;
  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < val) start = middle + 1;
    else if (arr[middle] > val) end = middle - 1;
    else return middle;
  }
  return -1;
}

// @input:      Sorted array, start index (0), end index (len - 1), value to search for
// @output:     Index of value if found, else -1
// @time-cplx:  O(log n)
// @spc-cplx:   O(1)

// RECURSIVE APPROACH
function recursiveBinarySearch(arr, start, end, val) {
  let middle;
  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < val)
      return recursiveBinarySearch(arr, middle + 1, end, val);
    else if (arr[middle] > val)
      return recursiveBinarySearch(arr, start, middle - 1, val);
    else return middle;
  }
  return -1;
}
