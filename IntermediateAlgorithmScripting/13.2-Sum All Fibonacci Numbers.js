/**
 * 使用缓存的方式，把计算过的结果保存起来，更大的数字计算直接从缓存中取
 */
// 使用数组缓存
var fibArr = [1,1];

function fibonacci(n){
  return fibArr[n] ? fibArr[n] : (fibArr[n] = fibonacci(n-1) + fibonacci(n-2));
}

function t(n) {
  console.time("time");
  console.log(fibonacci(n));
  console.timeEnd("time");
}

// 在Chrome上测试，不要拘泥于时间，会变化的
t(10); // 89          time: 1.15ms
t(20); // 10946       time: 1.13ms
t(30); // 1346269     time: 0.296ms
t(40); // 165580141   time: 1.57ms
t(45); // 1836311903  time: 0.904ms
t(50); // 20365011074 time: 1.11ms
