/**
 * 实现一个摧毁(destroyer)函数，第一个参数是待摧毁的数组，其余的参数是待摧毁的值。
 */

function destroyer(arr) {
  // arguments对象不是一个 Array 。它类似于数组，但除了长度之外没有任何数组属性。
  // 可以使用  Array.from()方法或 spread 运算符将 arguments 转换为真正的数组
  var arr1 = Array.from(arguments)[0];
  var arr2 = Array.from(arguments).slice(1);
  return arr1.filter(function(item){
    //arr1中同时不在arr2的值，就是不用摧毁的值
    return arr2.indexOf(item) < 0;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);