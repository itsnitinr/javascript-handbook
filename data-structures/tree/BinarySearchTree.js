class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // @desc:     Insert a node in BST
  // @params:   Data to be inserted
  // @cmplx:    O(log n)
  insert(data) {
    const newNode = new Node(data);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;
    while (true) {
      if (data === currentNode.value) return undefined;
      if (data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  // @desc:     Search for a data in BST
  // @params:   Data to search for
  // @cmplx:    O(log n)
  search(data) {
    if (!this.root) return undefined;
    let currentNode = this.root;
    while (currentNode) {
      if (data < currentNode.data) currentNode = currentNode.left;
      else if (data > currentNode.data) currentNode = currentNode.right;
      else return currentNode;
    }
    return undefined;
  }

  // @desc:     Remove a node from BST
  // @params:   Data of node to be removed
  // @cmplx:    O(log n)
  remove(node, data) {
    if (!node) return undefined;

    if (!node.left && !node.right) {
      if (node === this.root) this.root = null;
      return null;
    }

    if (data < node.data) {
      node.left = this.remove(node.left, data);
    } else if (data > node.data) {
      node.right = this.remove(node.right, data);
    } else {
      if (this._getHeight(node.left) > this._getHeight(node.right)) {
        let inorderPredecessor = this._getInorderPredecessor(node.left);
        node.data = inorderPredecessor.data;
        node.left = this.remove(node.left, inorderPredecessor.data);
      } else {
        let inorderSuccessor = this._getInorderSuccessor(node.right);
        node.data = inorderSuccessor.data;
        node.right = this.remove(node.right, inorderSuccessor.data);
      }
    }

    return node;
  }

  _getHeight(node) {
    if (!node) return false;
    let leftHeight, rightHeight;
    leftHeight = this._getHeight(node.left);
    rightHeight = this._getHeight(node.rightHeight);
    return leftHeight > rightHeight ? leftHeight + 1 : rightHeight + 1;
  }

  _getInorderPredecessor(node) {
    while (node && node.right) node = node.right;
    return node;
  }

  _getInorderSuccessor(node) {
    while (node && node.left) node = node.left;
    return node;
  }
}
