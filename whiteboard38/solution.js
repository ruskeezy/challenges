'use strict';

module.exports = bst => {
  let arr = [];

  _traverse(bst)

  function _traverse(node) {
    arr.push(node.value);
    if (node.left) _traverse(node.left);
    if (node.right) _traverse(node.right);
  }

  return arr;
}
