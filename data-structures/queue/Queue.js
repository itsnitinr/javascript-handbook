class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  // @desc:     Adds an element to the end of the queue
  // @params:   Data to be added
  // @cmplx:    O(1)
  enqueue(data) {
    const newNode = new Node(data);
    if (!this.front) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.size++;
    return this;
  }

  // @desc:     Removes an element to the front of the queue
  // @cmplx:    O(1)
  dequeue() {
    if (!this.front) return undefined;
    if (this.front === this.rear) this.rear = null;
    const dequeuedNode = this.front;
    this.front = this.front.next;
    this.size--;
    return dequeuedNode;
  }
}
