'use strict';

function missingArr(arr) {
  let max = Math.max.apply(null, arr);
  let returnArr = [];
  for(var i=1; i<max; i++) {
    if(arr.indexOf(i) <0) {
      returnArr.push(i);
    }
  }
  return returnArr;
}

missingArr([1, 7]);