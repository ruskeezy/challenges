'use strict';

function values(arr){
    let highVal = Math.max.apply(null, nums);
    highVali = arr.indexOf(highVal);
   	nums[highVali] = -Infinity
    let secVal = Math.max.apply(null, nums);
    nums[highVali] = highVal;
    let obj = { max: highVal, secMax: secVal};
    return obj;
}

// ***** TESTS ****** //
// describe('Array Module', function(){
// 	describe('#Array', function(){
// 		it('should be an array', function(){
// 			var result = Array.isArray(nums);
// 			assert.ok(result === true, 'not an array')
// 		})
// 	})
// 		it('should be 12', function(){
// 			var result = highVal;
// 			assert.ok(result === 12, 'not 12')
// 		})
// 		it('should be 10', function(){
// 			var result = secVal;
// 			assert.ok(result === 10, 'not 10')
// 		})
// 		it('array shouldnt be empty', function(){
// 			var result = nums.includes();
// 			assert.ok(result === true, 'array needs numbers')
// 		})
//     })