/**
 * 斐波那契数列指的是这样一个数列：
 * 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, ...
 *
 * 在数学上，斐波那契数列是以递归的方式定义：
 * n = 1,2 时，fibo(n) = 1
 * n > 2 时，fibo(n) = fibo(n-1) + fibo(n-2)
 */

function fibo(n) {
  return n < 2 ? 1 : fibo(n-1) + fibo(n-2);
}

function t(n) {
  console.time("time");
  console.log(fibo(n));
  console.timeEnd("time");
}

// 在Chrome上测试
t(10); // 89         time: 1.47ms
t(20); // 10946      time: 2.29ms
t(30); // 1346269    time: 24.9ms
t(40); // 165580141  time: 1.43e+3ms = 1430ms = 1.43s
t(45); // 1836311903 time: 1.55e+4ms = 15500ms = 15.5s
// n 再大的话，浏览器要爆炸了~所以要换种方法