/**
 * 对嵌套的数组进行扁平化处理。你必须考虑到不同层级的嵌套。
 * 题目的意思是把嵌套的数组重新整理成一个一维数组。
 * 思路：
 * 数组参数的元素有两种形式： Number 或者 Array 。
 * 判断每一个元素，如果是 Number 就直接 push 进结果数组，如果是 Array 就用递归的方法判断该数组内部情况，直到把数组参数拆成一个个数字为止
 */

function steamroller(arr) {
  var res = [];

  for(var i = 0; i < arr.length; i ++) {
    //如果arr[i]是数组，用递归的方法找出arr[i]的元素
    if(Array.isArray(arr[i])) {
      var temp = steamroller(arr[i]);
      res = res.concat(temp);
    }
    //如果arr[i]不是数组，直接push到result数组
    else {
      res.push(arr[i]);
    }
  }
  return res;
}
steamroller([[["a"]], [["b"]]]); // ["a", "b"]
steamroller([1, [2], [3, [[4]]]]); //  [1, 2, 3, 4]
steamroller([1, [], [3, [[4]]]]); // [1, 3, 4]
steamroller([1, {}, [3, [[4]]]]); // [1, {}, 3, 4]