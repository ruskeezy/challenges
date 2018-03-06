'use strict';

class Queue {
  constructor() {
    this.inbox = [];
    this.outbox = [];
  }


  enqueue(val) {
   this.inbox.push(val);
  };

  dequeue() {
   if (!this.outbox.length) {
     if (!this.inbox.length) {
       return undefined;
     }
     while (this.inbox.length) {
       this.outbox.push(this.inbox.pop());
     }
   }
   return this.outbox.pop();
  }
}

module.exports = new Queue;
