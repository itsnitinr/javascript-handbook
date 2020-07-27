class CustomArray {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  // @desc:     Get the data at given index
  // @params:   Index at which the data is to be retrieved
  // @cmplx:    O(1)
  get(index) {
    if (index < 0 || index > this.length - 1) return undefined;
    return this.data[index];
  }

  // @desc:     Insert element at the end of the array
  // @params:   Element to be inserted
  // @cmplx:    O(1)
  push(data) {
    this.data[this.length] = data;
    this.length++;
    return this.data;
  }

  // @desc:     Remove the last element of the array
  // @cmplx:    O(1)
  pop() {
    if (this.length === 0) return undefined;
    const poppedData = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return poppedData;
  }

  // @desc:     Insert an element at given index
  // @params:   Data to be inserted and the index
  // @cmplx:    O(n)
  insertAt(data, index) {
    if (index < 0 || index > this.length) return undefined;
    for (let i = this.length; i >= index; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[index] = data;
    this.length++;
    return this.data;
  }

  // @desc:     Remove an element at given index
  // @params:   Index at which the element is to be removed
  // @cmplx:    O(n)
  removeAt(index) {
    if (index < 0 || index > this.length - 1) return undefined;
    const removedData = this.data[index];
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return removedData;
  }
}
