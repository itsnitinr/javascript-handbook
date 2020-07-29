class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  // @desc:     Push an element to stack
  // @params:   Data to be pushed
  // @cmplx:    O(1)
  push(data) {
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
    return this;
  }

  // @desc:     Pop an element from stack
  // @cmplx:    O(1)
  pop() {
    if (!this.top) return undefined;
    const poppedTop = this.top.data;
    this.top = this.top.next;
    this.size--;
    return poppedTop;
  }

  // @desc:     Get the element at top of stack
  // @cmplx:    O(1)
  peek() {
    return this.top ? this.top.data : undefined;
  }

  // @desc:     Print all the items in stack
  // @cmplx:    O(n)
  print() {
    let currentNode = this.top;
    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
}
