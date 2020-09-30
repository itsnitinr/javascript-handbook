
  function compare(a, b) {
    return a - b;
  }

  var selectionSort = function (array, cmp) {
    cmp = cmp || compare;
    var idx;
    var temp;
    for (var i = 0; i < array.length - 1; i += 1) {
      idx = i;
      for (var j = i + 1; j < array.length; j += 1) {
        if (cmp(array[idx], array[j]) > 0) {
          idx = j;
        }
      }
      temp = array[i];
      array[i] = array[idx];
      array[idx] = temp;
    }
    return array;
  };
