'use strict';
require('jest');
const answer = require('../solution.js');

let linkedList = {value: 13, next:{value: 10, next:{value:20, next:{value: 40}}}};
let emptyList = {};

describe('Nth Function', function() {
  it('should return nth from last value', function() {
    expect(answer(linkedList, 4)).toEqual({value: 13, next:{value: 10, next:{value:20, next:{value: 40}}}});
  });
  it('should throw error if no linkedlist is provided', function() {
    expect(() => {
      return answer(null, 3);
    }).toThrow();
  });
  it('should throw an error if a number is not provided for the index', function() {
    expect(() => {
      return answer(linkedList, 'woo');
    }).toThrow();
  });
  it('should return value not defined if linked list object is empty', function() {
    expect(answer(emptyList, 3)).toEqual('value is undefined');
  });
});