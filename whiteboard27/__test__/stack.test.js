'use strict';

const Stack = require('../stack.js');
const Node = require('../node.js');
require('jest');


describe('Stacks', () => {
  var stack = new Stack();

  beforeEach(() => {
    stack.push(-5);
    stack.push(8);
    stack.push(10);
  });

  afterEach(() => {
    stack = new Stack();
  });
  

  describe('push', () => {
    it('should contain 3 values', () => {
      expect(stack instanceof Stack).toEqual(true);
      expect(stack.size).toEqual(3);
    });
  });

  describe('getMin', () => {
    it('should return the minimum value', () => {
      expect(stack.getMin()).toEqual(-5);
    });
  });

  describe('pop', () => {
    it('should return the top value', () => {
      expect(stack.pop()).toEqual({val: 10, next: null});
      expect(stack.size).toEqual(2);
    });
  });

  describe('peek', () => {
    it('should return the top value', () => {
      expect(stack.peek()).toEqual(10);
      expect(stack.size).toEqual(3);
    });
  });
});