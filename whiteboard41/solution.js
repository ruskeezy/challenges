'use strict';

const bst = {
  root: {
    value: 15, 
    left: {
      value: 8, 
      left: {
        value: 4, 
        left: null,
        right: null,
      },
      right: {
        value: 10, 
        left: null,
        right: null,
      },
    },
    right: {
      value: 20, 
      left: null,
      right: {
        value: 30, 
        left: null,
        right: null,
      },
    },
  },
};

const removeNode = function(tree, removeValue) {
  const _traverse = (node) => {
    if (!node) return;

    _traverse(node.left);
    _traverse(node.right);
  };

  _traverse(tree.root);
}
