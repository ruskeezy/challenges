'use strict';

module.exports = function(linkList, n) {
  if (!linkList) throw new Error('expected linked list');
  if (!n) throw new Error('expected index');
  if (typeof n !== 'number') throw new Error('expected integer');
  if (typeof linkList !== 'object') throw new Error('expected linked list object');
  
  let ll = linkList;
  let values = [];

  if (ll.value !== undefined) {
    values.push(ll);
    while(ll.next !== undefined) {
      ll = ll.next;
      values.push(ll);
    }
    return values[values.length - n];
  }

  if (ll.value === undefined) {
    return 'value is undefined';
  }