/**
 * 给一个正整数num，返回小于或等于num的斐波纳契奇数之和。
 * 斐波纳契数列中的前几个数字是 1、1、2、3、5 和 8，随后的每一个数字都是前两个数字之和。
 * 例如，sumFibs(4)应该返回 5，因为斐波纳契数列中所有小于4的奇数是 1、1、3。
 * 提示：此题不能用递归来实现斐波纳契数列。因为当num较大时，内存会溢出，推荐用数组来实现。
 */

var cache = [1, 1];

function fibonacci(n){
  return cache[n] ? cache[n] : (cache[n] = fibonacci(n-1) + fibonacci(n-2));
}

function sumFibs(num) {
  // 当num <= cache[cache.length - 1]才跳出循环
  while (num > cache[cache.length - 1]) {
    i = cache.length;
    fibonacci(i);
  }
  // 找出cache中小于num的奇数
  var arr = cache.filter(function(val){
    return val % 2 !== 0 && val <= num;
  });
  // 求奇数的和
  return arr.reduce(function(a, b) {
    return a + b;
  });
}

sumFibs(4); // 1+1+3 = 5
sumFibs(1000); // 1+1+3+5+13+21+55+89+233+377+987 = 1785