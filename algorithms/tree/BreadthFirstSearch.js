function breadthFirstSearch(tree) {
  var data = [];
  var queue = [];
  var node = tree.root;
  queue.push(node);

  while (queue.length) {
    node = queue.shift();
    data.push(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return data;
}
