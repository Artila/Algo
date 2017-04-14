/**
 * 使用对象缓存
 */

var cache = {
  0: 1,
  1: 1
};

function fibonacci(n){
  return cache[n] ? cache[n] : (cache[n] = fibonacci(n-1) + fibonacci(n-2));
}

function t(n) {
  console.time("time");
  console.log(fibonacci(n));
  console.timeEnd("time");
}

// 在Chrome上测试
t(10); // 89          time: 1.01ms
t(20); // 10946       time: 0.889ms
t(30); // 1346269     time: 1.42ms
t(40); // 165580141   time: 0.931ms
t(45); // 1836311903  time: 0.891ms
t(50); // 20365011074 time: 1.29ms