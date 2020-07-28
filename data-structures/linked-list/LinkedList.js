class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
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
    let count = 0;
    let currentNode = this.head;
    while (count !== index) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
  }

  // @desc:     Set new value of node at given index
  // @params:   Data and index
  // @cmplx:    O(n)
  set(data, index) {
    let foundNode = this.get(index);
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
      this.tail = newNode;
    }
    this.size++;
    return this;
  }

  // @desc:     Insert a node to the start of the list
  // @params:   Data to be inserted
  // @cmplx:    O(1)
  prepend(data) {
    this.head = new Node(data, this.head);
    !this.tail ? (this.tail = this.head) : null;
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

    newNode.next = afterNode;
    beforeNode.next = newNode;
    this.size++;
    return this;
  }

  // @desc:     Remove a node from the end of the list
  // @cmplx:    O(n)
  removeTail() {
    if (!this.head) return undefined;
    let currentNode = this.head;
    let newTail = currentNode;

    while (currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.size--;
    this.size === 0 ? ([this.head, this.tail] = [null, null]) : null;
    return currentNode;
  }

  // @desc:     Remove a node from the start of the list
  // @cmplx:    O(1)
  removeHead() {
    if (!this.head) return undefined;
    const removedHead = this.head;
    this.head = this.head.next;
    this.size--;
    this.size === 0 ? (this.tail = null) : null;
    return removedHead;
  }

  // @desc:     Remove a node at a given index
  // @cmplx:    O(n)
  removeAt(index) {
    if (index < 0 || index > this.size - 1) return undefined;
    if (index === 0) return this.removeHead();
    if (index === this.size - 1) return this.removeTail();

    let beforeNode = this.get(index - 1);
    const removedNode = beforeNode.next;
    let afterNode = removedNode.next;

    beforeNode.next = afterNode;
    removedNode.next = null;
    this.size--;
    return removedNode;
  }

  // @desc:     Reverse the list
  // @cmplx:    O(n)
  reverse() {
    let [prevNode, currentNode, nextNode] = [null, this.head, null];
    this.head = this.tail;
    this.tail = currentNode;
    while (currentNode) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
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
