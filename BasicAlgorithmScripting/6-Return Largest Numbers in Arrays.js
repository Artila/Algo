/**
 * 右边大数组中包含了4个小数组，分别找到每个小数组中的最大值，然后把它们串联起来，形成一个新数组。
 * 提示：你可以用for循环来迭代数组，并通过arr[i]的方式来访问数组的每个元素。
 */

function largestOfFour(arr) {
  var newArr = [];
  var len = arr.length;
  for (var i = 0; i < len; i++){
    // 每个数组的最大值
    newArr[i] = Math.max.apply(null, arr[i]);
  }

  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// [5, 27, 39, 1001]

largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);
// [9, 35, 97, 1000000]
