class Stack {
  constructor() {
    this.data = [];
    this.top = -1;
  }

  // @desc:     Push an element to stack
  // @params:   Data to be pushed
  // @cmplx:    O(1)
  push(data) {
    this.top++;
    this.data[this.top] = data;
    return this.data;
  }

  // @desc:     Pop an element from stack
  // @cmplx:    O(1)
  pop() {
    if (this.top < 0) return undefined;
    const poppedTop = this.data[this.top];
    this.top--;
    return poppedTop;
  }

  // @desc:     Get the element at top of stack
  // @cmplx:    O(1)
  peek() {
    return this.top >= 0 ? this.data[this.top] : undefined;
  }

  // @desc:     Print all the items in stack
  // @cmplx:    O(n)
  print() {
    for (let i = this.top; i >= 0; i--) {
      console.log(this.data[i]);
    }
  }
}
