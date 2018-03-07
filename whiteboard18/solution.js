'use strict';

module.exports = function(arr) {
  var counter = 0;
  var highest = 0;

  for(var i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      counter++;
      if (counter > highest) {
        highest = counter;
      }
    }

    if (arr[i] === 0) {
      counter = 0;
    }

  }
  return highest;
}