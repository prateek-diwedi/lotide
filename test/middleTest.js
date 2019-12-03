const eqArrays = require('../eqArrays')
;
const assert = require('chai').assert,
   middle = require('../middle');
const assertEqual = require('../assertEqual');



describe('#middle', () => {
  it("it returns empty space", () => {
    assert.deepEqual(middle([1, 2],[]),([]));
  });
  it("it returns [2, 3] space", () => {
    assert.deepEqual(middle([1, 2, 3, 4]),([2, 3]));
  });
  it("it returns [7, 8] space", () => {
    assert.deepEqual(middle([5, 7, 8, 12]),([7, 8]));
  });

});



assertEqual(eqArrays([1,2,3],[1,2,3]), true);
assertEqual(eqArrays([1,2,3],[1,9,9,2,1,3]), false);
assertEqual(eqArrays([1,2,3],[1,5,3]), true);