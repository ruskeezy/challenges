'use strict';

const solution = require('../solution');
require('jest');

let linkedList = {value: 3, next: {value: 1, next: {value: 3}}};
let linkedList2 = {value: 2, next: {value: 3, next: {value: 2}}};
let linkedListFail = {value: 1, next: {value: 4, next: {value:6}}};

describe('Palindrome Test', function() {
  describe('returns true', function() {
    it('should return true', function() {
      expect(solution(linkedList)).toBe(true);
      expect(solution(linkedList2)).toBe(true);
    });
  });
  describe('returns false', function() {
    it('should return false', function() {
      expect(solution(linkedListFail)).toBe(false);      
    });
  });
});