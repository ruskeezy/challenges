'use strict';

module.exports = class {
  constructor(val) {
    if (!val) return new Error('expected value');
    this.val = val;
    this.next = null;
  }
};