'use strict';

function List() {
  for(let idx in arguments) {
    this[idx] = arguments[idx];
  }
  this.length = arguments.length;
}

List.prototype.copy = function() {
  let copy = new List;
  for(let prop in this) {
    copy[prop] = this[prop];
  }
  return copy;
}

List.prototype.push = function(value) {
  let copy = this.copy();
  copy[copy.length++] = value;
  return value;
}

List.prototype.pop = function() {
  let copy = this.copy();
  delete copy[copy.length];
  return copy;
}