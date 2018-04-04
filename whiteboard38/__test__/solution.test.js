'use strict';

const bst = require('../solution');
require('jest');

let tree = {value: 4, left: {value: 2, left: {value: 1}, right: {value: 3}}, right: {value: 9, left: {value: 7}}}

describe('BST TEST', () => {
  it('should return an array', () => {
    expect(bst(tree)).toEqual([4, 2, 1, 3, 9, 7])
  });
});