'use strict';

const Node = require('./node');

module.exports = class {
  constructor(maxSize=1048) {
    this.top = null;
    this.size = 0;
    this.maxSize = maxSize;
    this.min = null;
  }

  push(val) {
    if(this.size === this.maxSize) throw new Error('Power overwhelming');
    if(this.min === null) {
      this.min = val;
    } else {
      if(this.min > val) {
        this.min = val;
      }
    }
    let node = new Node(val);
    node.next = this.top;
    this.top = node;
    this.size++;
    return this.top;
  }

  pop() {
    if(this.top.val === this.min) {
      let current = this.top.next;
      this.min = current.val;
      while(current.next !== null) {
        if(current.next.val < current.val) {
          this.min = current.next.val;
        }
        current = current.next;
      }
    }
    let temp = this.top;
    console.log(temp);
    this.top = temp.next;
    temp.next = null;
    this.size--;
    return temp;    
  }

  peek() {
    return this.top.val;
  }

  getMin() {
    return this.min;
  }
}