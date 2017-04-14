/**
 * 我们会传递给你一个包含两个数字的数组。返回这两个数字和它们之间所有数字的和。
 * 最小的数字并非总在最前面。
 */

function sumAll(arr) {
  // 当数组中有大量数字的时候，可以用 Math.max.apply(null, arr) 求最大值
  // var max = Math.max.apply(null, arr);
  // var min = Math.min.apply(null, arr);
  var min =  Math.min(arr[0], arr[1]);
  var max =  Math.max(arr[0], arr[1]);
  var temp = [];
  for (var i = min; i <= max; i++) {
    temp.push(i);
  }
  // reduce 为数组中的每一个元素依次执行回调函数
  // 接受四个参数：初始值 accumulator （或者上一次回调函数的返回值），当前元素值 currentValue ，当前索引 currentIndex ，调用 reduce 的数组。
  // 回调函数第一次执行时，accumulator 和 currentValue 的取值有两种情况：调用 reduce 时提供initialValue，accumulator 取值为 initialValue ，currentValue 取数组中的第一个值；没有提供 initialValue ，accumulator 取数组中的第一个值，currentValue 取数组中的第二个值。
  // 注意: 不提供 initialValue ，reduce 会从索引1的地方开始执行 callback 方法，跳过第一个索引。提供 initialValue ，从索引0开始。
  sum = temp.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);

  return sum;
}

// 第二种方法： 可以归纳为两个数之间的连续自然数列求和问题。项数可以用Math.abs()方法求出。
//function sumAll(arr) {
//  // Smn=(n+m)(n-m+1)/2
//  var sum=(arr[1]+arr[0])*(Math.abs(arr[1]-arr[0])+1)/2;
//  return sum;
//}

sumAll([1, 4]); // 10
sumAll([4, 1]); // 10
sumAll([5, 10]); // 45
sumAll([10, 5]); // 45
