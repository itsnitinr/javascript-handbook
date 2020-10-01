// @input:      Random array, start index (0), end index (len - 1)
// @output:     Sorted Array
// @time-cplx:  O(n^2)
// @spc-cplx:   O(1)
function bubbleSort(array) {
  var temp;
  for (var i = 0; i < array.length - 1; i += 1) {
    var swapCount = 0;
    for (var j = 0; j < array.length - 1 - i; j += 1) {
      if (array[j]>array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapCount += 1;
      }
    }
    if (swapCount === 0) {
      break;
    }
  }
  return array;
}
