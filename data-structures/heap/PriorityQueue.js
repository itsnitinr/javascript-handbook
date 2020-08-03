class Node {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  // @desc:     Insert a node
  // @params:   Data & priority of node
  // @cmplx:    O(log n)
  enqueue(data, priority) {
    // Push the new element to the last initially
    const newNode = new Node(data, priority);
    this.values.push(newNode);
    let index = this.values.length - 1;
    const element = this.values[index];

    // Keep comparing the newNode's priority with parent's priority
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element.priority >= parent.priority) break;
      // If parent element is smaller than new element, swap
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  // @desc:     Remove highest priority element
  // @cmplx:    O(log n)
  dequeue() {
    const minElement = this.values[0];
    const lastElement = this.values.pop();
    if (this.values.length === 0) return minElement;
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
        if (leftChild.priority < element.priority) {
          swap = leftChildIndex;
        }
      }

      // Swap with right child if it's greater than element and left child
      if (rightChildIndex < this.values.length) {
        rightChild = this.values[rightChildIndex];
        if (
          (!swap && rightChild.priority < element.priority) ||
          (swap && rightChild.priority < leftChild.priority)
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
    return minElement;
  }
}
