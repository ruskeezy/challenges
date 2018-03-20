'use strict';

module.exports = exports = {};

exports.map = function(array, callback) {
  let results = [];
  for(let element of array) {
    results.push(callback(element));
  }
  return results;
}

exports.filter = function(array, callback) {
  let results = [];
  for(let element of array) {
    if(callback(element)) {
      results.push(element);
    }
  }
  return results;
}

exports.reduce = function(arr, callback, initialState) {
  if(initialState === undefined) {
    var result = arr[0];
    var i = 1;
  } else {
    var result = initialState;
    var i = 0;
  }

  for(i; i < arr.length; i++) {
    result = callback(result, arr[i]);
  }
  return result;
}