function preorderDFS(tree) {
  var data = [];
  function traverse(node) {
    data.push(node.data);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  }
  traverse(tree.root);
  return data;
}

function inorderDFS(tree) {
  var data = [];
  function traverse(node) {
    if (node.left) traverse(node.left);
    data.push(node.data);
    if (node.right) traverse(node.right);
  }
  traverse(tree.root);
  return data;
}

function postorderDFS(tree) {
  var data = [];
  function traverse(node) {
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    data.push(node.data);
  }
  traverse(tree.root);
  return data;
}
