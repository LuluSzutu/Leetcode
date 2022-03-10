/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  var res = [];

  helper(res, [], 1, n, k);

  return res;
};

var helper = function (res, temp, start, n, k) {
  if (k === temp.length) {
    res.push([...temp]);
    return;
  }

  for (var i = start; i <= n; i++) {
    temp.push(i)
    helper(res, temp, i + 1, n, k);
    temp.pop();
  }
}


