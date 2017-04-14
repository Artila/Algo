/**
 * 所有的东西都是真的！
 * 完善编辑器中的every函数，如果集合(collection)中的所有对象都存在对应的属性(pre)，并且属性(pre)对应的值为真。函数返回ture。反之，返回false。
 * 记住：你只能通过中括号来访问对象的变量属性(pre)。
 * 提示：你可以有多种实现方式，最简洁的方式莫过于Array.prototype.every()。
 * 依旧是对前面的复习。
 */

function every(collection, pre) {
  // every() 方法测试数组的所有元素是否都通过了指定函数的测试。
  return collection.every(function(element) {
    return element[pre];
  });
}

every([{"single": "yes"}], "single"); // true
every([{"single": ""}, {"single": "double"}], "single"); // false
every([{"single": "double"}, {"single": undefined}], "single"); // false
every([{"single": "double"}, {"single": NaN}], "single"); // false