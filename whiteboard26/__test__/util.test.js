'use strict';

const solution = require('../util');
require('jest');

describe('Map', function() {
  describe('with valid usage', function() {
    it('should return a mapped array', function() {
      expect(solution.map([2, 4, 6, 8], x => x + 2)).toEqual([4, 6, 8, 10]);
    });
  });

  describe('Filter', function() {
    describe('with valid usage', function() {
      it('should remove even numbers', function() {
        expect(solution.filter([1, 2, 3, 4, 5, 6], x => x%2 !== 0)).toEqual([1, 3, 5]);
      });
    });
  });
  
  describe('Reduce', function() {
    describe('with valid usage', function() {
      it('should sum all the numbers in the array', function() {
        expect(solution.reduce([1, 2, 3, 4, 5], (a, b) => a + b)).toEqual(15);
      });
    });
  });
});