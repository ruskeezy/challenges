'use strict';


function combineArrays(arr1, arr2) {
  let j = 0;
  let solution = [];

  for (i = 0; i < arr1.length;) {
    if (arr2[j] < arr1[i]) {
      solution.push(arr2[j]);
      j++;
      if (j === arr2.length) {
        break;
      }
    } else if (arr2[j] > arr1[i]) {
      solution.push(arr1[i]);
      i++;
    } else {
      solution.push(arr1[i]);
      solution.push(arr2[j]);
      i++;
      j++;
      if (j === arr2.length) {
        break;
      }
    }
  }

  if (j <= arr2.length - 1) {
    for (j = j; j < arr2.length; j++) {
      solution.push(arr2[j]);
    }
  }

  if (i <= arr1.length - 1) {
    for (i = i; i < arr1.length; i++) {
      solution.push(arr1[i]);
    }
  }


  return solution;
}