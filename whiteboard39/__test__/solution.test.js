'use strict';

const preOrderFind = require('../solution.js');
require('jest');

const testBst = {
  root: {
    value: 5,
    left: {
      value: 2,
      left: {
        value: 1,
        left: null,
        right: null,
      },
      right: {
        value: 3,
        left: null,
        right: null,
      },
    },
    right: {
      value: 6,
      left: null,
      right: null,
    }
  }
}

describe('Find method', () => {
  it('should pass, returning true', () => {
    expect(preOrderFind(testBst, 6)).toEqual(true);
  });
  it('should pass, returning false', () => {
    expect(preOrderFind(testBst, 7)).toEqual(false);
  });
});