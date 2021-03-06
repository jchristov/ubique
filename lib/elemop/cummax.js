/**
 * Arithmetic Operations
 */
 module.exports = function($u) {
/**
 * @method cummax
 * @summary Cumulative max of array elements
 * @description Cumulative max of array elements
 * 
 * @param  {array|matrix} x array or matrix of values
 * @param  {number} dim dimension selected, 1: column 0: row (def: 1)
 * @return {array|matrix}   
 *
 * @example
 * ubique.cummax([5,6,3]);
 * // [ 5, 6, 6 ]
 * 
 * ubique.cummax([[5,6,5],[7,8,-1]]);
 * // [ [ 5, 6, 5 ], [ 7, 8, 5 ] ]
 * 
 * ubique.cummax([[5,6,5],[7,8,-1]],0);
 * // [ [ 5, 6, 6 ], [ 7, 8, 8 ] ]
 */
 $u.cummax = function(x,dim) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  dim = dim == null ? 1 : dim;
  var _cummax =  function(a) {
    var v = [];
    v[0] = a[0];
    for (var i = 1;i < a.length;i++) {
      if (a[i] >= v[i - 1]) {
        v[i] = a[i];
      } else { 
        v[i] = v[i - 1];
      }
    }
    return v;
  }
  return $u.vectorfun(dim,x,_cummax);
}

}