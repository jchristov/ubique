var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/size ...');
test('size', function (done) {



assert.deepEqual(ubique.size([[[[5,6,5],[7,8,-1]]]]),[1,1,2,3]);
assert.deepEqual(ubique.size([[3,2,7],[4,5,6]]),[2,3]);
assert.deepEqual(ubique.size([5,4,4]),[3,1]);
assert.deepEqual(ubique.size(5),[1,1]);
assert.deepEqual(ubique.size('ubique'),[1,6]);
assert.deepEqual(ubique.size([['first','second']]),[1,2]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->