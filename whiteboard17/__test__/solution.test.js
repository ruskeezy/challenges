'use strict';

const solution = require('../solution');
require('jest');


describe('enqueue tests', function() {
  beforeAll( () => {
    solution.enqueue(1);
    solution.enqueue(2);
    solution.enqueue(3);
    solution.enqueue(4);
    solution.enqueue(5);
  });

  it('should return an inbox with 5 values', () => {
    expect(solution.inbox[0]).toEqual(1);
    expect(solution.inbox[1]).toEqual(2);
    expect(solution.inbox[2]).toEqual(3);
    expect(solution.inbox[3]).toEqual(4);
    expect(solution.inbox[4]).toEqual(5);
  });

  describe('dequeue tests', () => {
    beforeAll( () => {
      solution.enqueue(1);
      solution.enqueue(2);
      solution.enqueue(3);
      solution.dequeue();
      solution.dequeue();
    });

    it('should return an inbox with 1 value and an outbox 2', () => {
      console.log(solution.inbox);
      expect(solution.outbox[0]).toEqual(3);
      expect(solution.outbox[1]).toEqual(2);
    });
  });
});