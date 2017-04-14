/**
 * 返回一个数组被截断n个元素后还剩余的元素，截断从索引0开始。
 */

function slasher(arr, howMany) {
  // slice 返回到从开始到结束（不包括结束）选择的新数组对象，开始位置就是howMany，结束位置默认原数组末尾
  return arr.slice(howMany);
}

slasher([1, 2, 3], 2); // [3]
slasher([1, 2, 3], 0); // [ 1, 2, 3 ]
slasher([1, 2, 3], 9); // []
slasher(["burgers", "fries", "shake"], 1); // [ 'fries', 'shake' ]
slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5); // [ 'cheese', 4 ]