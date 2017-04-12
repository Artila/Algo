/**
 * 找出能被两个给定参数和它们之间的连续数字整除的最小公倍数。
 * 范围是两个数字构成的数组，两个数字不一定按数字顺序排序。
 * 例如对 1 和 3 —— 找出能被 1 和 3 和它们之间所有数字整除的最小公倍数。
 *
 * 注意：
 * 这里涉及到经典算法：求最大公约数gcd（greatest common divisor）和最小公倍数scm（smallest common multiple）
 * gcd（最大公约数）算法过程（欧几里德算法/辗转相除法）
 *
 * 辗转相除法：用小数除大数（就是大数除以小数），如果余数不是零，就把余数和较小的数构成一组新数，继续上面的除法，知道大数被小数约尽，此时比较小的数就是最大公约数
 *
 * 有两整数a和b：
 * ① a%b得余数c，即 c=a%b
 * ② 若c=0，则b即为两数的最大公约数
 * ③ 若c≠0，则a=b，b=c，再回去执行①
 *
 * scm算法（最小公倍数算法）
 * 最小公倍数 = 两整数的乘积÷最大公约数，即scm = a*b / gcd(a,b)
 */

function smallestCommons(arr) {
  var min = Math.min(arr[0], arr[1]);
  var max = Math.max(arr[0], arr[1]);
  var _arr = [];
  // 两个给定参数之间的连续数字
  for(var i = min; i <= max; i++){
    _arr.push(i);
  }
  // 最大公约数
  var gcd = function(a,b){
    if(a%b === 0){
      return b;
    }
    return gcd(b, a % b);
  };
  // 最小公倍数 = 两整数的乘积÷最大公约数
  // reduce() 方法对累加器和数组中的每个元素 (从左到右)应用一个函数，将其减少为单个值。
  return  _arr.reduce(function(prev,cur){
    return prev*cur / gcd(prev, cur);
  });

}

smallestCommons([1,3]); // 6
smallestCommons([1,5]); // 60
smallestCommons([1,10]); // 2520