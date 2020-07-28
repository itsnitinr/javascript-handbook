class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // @desc:     Gets the node at given index
  // @params:   Index
  // @cmplx:    O(n)
  get(index) {
    if (index < 0 || index > this.size - 1) return undefined;
    let count, currentNode;
    if (index <= this.size / 2) {
      count = 0;
      currentNode = this.head;
      while (count !== index) {
        currentNode = currentNode.next;
        count++;
      }
    } else {
      count = this.size - 1;
      currentNode = this.tail;
      while (count !== index) {
        currentNode = currentNode.prev;
        count--;
      }
    }
    return currentNode;
  }

  // @desc:     Set new value of node at given index
  // @params:   Data and index
  // @cmplx:    O(n)
  set(data, index) {
    let foundNode = this.get(index);
    console.log("Found node", foundNode.data);
    if (foundNode) {
      foundNode.data = data;
      return this;
    }
    return undefined;
  }

  // @desc:     Insert a node to the end of the list
  // @params:   Data to be inserted
  // @cmplx:    O(1)
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size++;
    return this;
  }

  // @desc:     Insert a node to the start of the list
  // @params:   Data to be inserted
  // @cmplx:    O(1)
  prepend(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
    return this;
  }

  // @desc:     Insert a node at the given index
  // @params:   Data and index
  // @cmplx:    O(n)
  insertAt(data, index) {
    if (index < 0 || index > this.size) return undefined;
    if (index === 0) return this.prepend(data);
    if (index === this.size) return this.append(data);

    let beforeNode = this.get(index - 1);
    const newNode = new Node(data);
    let afterNode = beforeNode.next;

    newNode.prev = beforeNode;
    newNode.next = afterNode;
    beforeNode.next = newNode;
    afterNode.prev = newNode;
    this.size++;
    return this;
  }

  // @desc:     Remove a node from the end of the list
  // @cmplx:    O(1)
  removeTail() {
    if (!this.head) return undefined;
    const oldTail = this.tail;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }
    this.size--;
    return oldTail;
  }

  // @desc:     Remove a node from the start of the list
  // @cmplx:    O(1)
  removeHead() {
    if (!this.head) return undefined;
    const oldHead = this.head;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.size--;
    return oldHead;
  }

  // @desc:     Remove a node at a given index
  // @cmplx:    O(n)
  removeAt(index) {
    if (index < 0 || index > this.size - 1) return undefined;
    if (index === 0) return this.removeHead();
    if (index === this.size - 1) return this.removeTail();

    let removedNode = this.get(index);
    let beforeNode = removedNode.prev;
    let afterNode = removedNode.next;

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    removedNode.next = null;
    removedNode.prev = null;
    this.size--;
    return removedNode;
  }

  // @desc:     Reverse a linked list
  // @cmplx:    O(n)
  reverse() {
    let currentNode = this.head;
    this.tail = this.head;
    while (currentNode) {
      let temp = currentNode.next;
      currentNode.next = currentNode.prev;
      currentNode.prev = temp;
      currentNode = currentNode.prev;
      if (currentNode && !currentNode.next) {
        this.head = currentNode;
      }
    }
    return this;
  }

  // @desc:     Prints all the data in list
  // @cmplx:    O(n)
  print() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
}
