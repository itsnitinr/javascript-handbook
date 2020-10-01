// @input:      Array
// @output:     Array sorted in ascending / descending order
// @time-cplx:  O(n^2)
// @spc-cplx:   O(1)

function insertionSort(array) {
  // This function sorts in ascending order
  for (let i = 1; i < array.length; i++) {
    var element = array[i];
    var j = i - 1;
    while (j >= 0) {
      if (array[j] > element) array[j + 1] = array[j];
      else break;
      j--;
    }
    array[j + 1] = element;
  }
  return array;
}
