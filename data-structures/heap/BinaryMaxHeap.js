class BinaryMaxHeap {
  constructor() {
    this.values = [];
  }

  // @desc:     Insert an element
  // @params:   Data to be inserted
  // @cmplx:    O(log n)
  insert(data) {
    // Push the new element to the last initially
    this.values.push(data);
    let index = this.values.length - 1;
    const element = this.values[index];

    // Keep comparing the element with parent element
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element <= parent) break;
      // If parent element is smaller than new element, swap
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  // @desc:     Remove maximum element
  // @cmplx:    O(log n)
  extractMax() {
    const maxElement = this.values[0];
    const lastElement = this.values.pop();
    if (this.values.length === 0) return maxElement;
    this.values[0] = lastElement;

    // Trickle down to correct spot
    let index = 0;
    const element = this.values[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      // Swap with left child if it's greater
      if (leftChildIndex < this.values.length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }

      // Swap with right child if it's greater than element and left child
      if (rightChildIndex < this.values.length) {
        rightChild = this.values[rightChildIndex];
        if (
          (!swap && rightChild > element) ||
          (swap && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }

      // If no swaps were done, break out of loop
      if (!swap) break;

      // Otherwise, update index and elements
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
    return maxElement;
  }
}
