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

    let currentNode = this.head;
    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next;
    }
    const newNode = new Node(data);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
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

    let currentNode = this.head;
    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next;
    }
    const removedNode = currentNode.next;
    currentNode.next = currentNode.next.next;
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
