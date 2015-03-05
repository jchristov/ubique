var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/mergesort ...');
test('mergesort', function (done) {

var x = [3,1,-1,0,5];

assert.deepEqual(ubique.mergesort([3,1,-1,5],"ascend"),[-1,1,3,5]);
assert.deepEqual(ubique.mergesort(x,"descend"),[5,3,1,0,-1]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->