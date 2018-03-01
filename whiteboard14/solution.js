'use strict';


module.exports = function(linkedList, index) {
  let current = linkedList;
  let prev = null;

  while (current !== null) {
    if (current.value === index) {
      prev.next = current.next;
      return linkedList;
    }
    prev = current;
    current = current.next;
  }
}

