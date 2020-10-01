// @input:      Random array, start index (0), end index (len - 1)
// @output:     Sorted Array
// @time-cplx:  O(n^2)
// @spc-cplx:   O(1)

function selectionSort(array) {
  let swaps = 0;
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (i !== min) {
      [array[i], array[min]] = [array[min], array[i]];
      swaps++;
    }
  }
  return array;
};
