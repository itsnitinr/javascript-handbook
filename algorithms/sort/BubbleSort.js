// @input:      An array
// @output:     Sorted array
// @time-cplx:  O(n^2)
// @spc-cplx:   O(1)

function bubbleSort(array) {
  let temp;
  for (let i = 0; i < array.length - 1; i++) {
    let swapCount = 0;
    for (let j = 0; j < array.length - 1 - i; j += 1) {
      if (array[j] > array[j + 1]) {
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
