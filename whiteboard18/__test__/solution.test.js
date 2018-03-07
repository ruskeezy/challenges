'use strict';

const solution = require('../solution');
require('jest');

var testArr = [1, 1, 1, 0, 0, 1, 1, 1, 1, 1]

describe('Solution test', function() {
  describe('consecutive numbers', function() {
    it('should return 5', function() {
      expect(solution(testArr)).toEqual(5);
    });
  });
});