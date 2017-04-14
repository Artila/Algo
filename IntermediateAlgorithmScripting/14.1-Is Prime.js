/**
 * 基本判断思路：
 * 在一般领域，对正整数n，如果用2到√n之间的所有整数去除，均无法整除，则n为质数。
 * 质数大于等于2，不能被它本身和1以外的数整除
 */

function isPrime(num){
  // 标记是否是质数，初始值是true
  var flag = true;
  // 质数：只能被1和本身整除
  // 如果num可以整除2~Math.sqrt(num)中的任意一个数，则num不是质数，改变标记flag，并终止循环
  // Math.sqrt(x)，返回一个数的平方根。
  // for 的判断条件为true， 循环体内的语句将被执行。如果被忽略，那么就被认为永远为true。如果计算结果为false，那么执行流程将被跳到for语句结构后面的第一条语句。
  for(var i=2; i<= Math.sqrt(num); i++){
    if(num%i === 0)
    {
      flag = false;
      break;
    }
  }

  return flag;
}

isPrime(21);  // false
isPrime(211); // true