/**
 * 求小于等于给定数值的质数之和。
 * 只有 1 和它本身两个约数的数叫质数。例如，2 是质数，因为它只能被 1 和 2 整除。1 不是质数，因为它只能被自身整除。
 * 给定的数不一定是质数。
 */

function isPrime(num){
  // 标记是否是质数，初始值是true
  var flag = true;
  // 质数：只能被1和本身整除
  // 如果num可以整除2~Math.sqrt(num)中的任意一个数，则num不是质数，改变标记flag，并终止循环
  // Math.sqrt(x)，返回一个数的平方根。
  // for 的判断条件为true， 循环体内的语句将被执行。如果被忽略，那么就被认为永远为true。如果计算结果为false，那么执行流程将被跳到for语句结构后面的第一条语句。
  for(var i = 2; i <= Math.sqrt(num); i++){
    if(num%i === 0)
    {
      flag = false;
      break;
    }
  }
  return flag;
}

function sumPrimes(num) {
  var sum = 0;
  // 输出小于等于给定数值的质数
  // var arr = [];
  for (var i = 2; i <= num; i++) {
    if(isPrime(i)) {
      sum += i;
     // arr.push(i);
    }
  }
  // console.log(arr);
  return sum;
}

// 另一种方法：把不是质数的数找出来
//function sumPrimes(num) {
//  var sum = 0;
//  var i = 2;
//  while(i <= num) {
//    for(var j = 2; j <= Math.sqrt(i); j++) {
//      if(i % j === 0) {
//        sum -= i;
//        break;
//      }
//    }
//    sum += i;
//    i++;
//  }
//  return sum;
//}

sumPrimes(10); // 2 + 3 + 5 + 7 = 17
sumPrimes(20); // 2 + 3 + 5 + 7 + 11 + 13 + 17 + 19= 77
sumPrimes(977); // 73156
