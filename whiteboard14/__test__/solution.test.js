'use strict';

const solution = require('../solution');
require('jest');

let linkedlist = { value: 1, next: { value: 2, next: { value: 3, next: { value: 4, next: { value: 5, next: null}}}}};


describe('Whiteboard solution', function() {
  describe('with a linked list', function() {
    it('should return the new linked list', function(done) {
      expect(solution(linkedlist, 3)).toEqual({
        value: 1, next: {
          value: 2, next: {
            value: 4, next: {
              value: 5, next: null
            }
          }
        }

      });
      done();
    });
  });
});