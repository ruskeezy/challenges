'use strict';

module.exports = function(linkedList) {
  
  let ll = linkedList;
  let palindrome = [];
  let values = [];

  if (ll.value !== undefined) {
    values.push(ll.value);
    palindrome.push(ll.value);
    while(ll.next !== undefined) {
      ll = ll.next;
      values.push(ll.value);
      palindrome.push(ll.value);
    }
    if(values.toString() === palindrome.reverse().toString()) {
      return true;
    } else {
      return false;
    }
  }

  if (ll.value === undefined) {
    return 'value is undefined';
  }
}