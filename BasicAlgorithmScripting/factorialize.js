/**
 * Factorialize a Number(计算菲波那切数列)
 * 计算一个整数的阶乘。
 * 如果用字母n来代表一个整数，阶乘代表着所有小于或等于n的整数的乘积。
 * 阶乘通常简写成 n!
 * 例如: 5! = 1 * 2 * 3 * 4 * 5 = 120
 * Factorial称之为阶乘，维基百科是这样描述的“一个正整数的阶乘是所有小于及等于该数的正整数的积，并且有0的阶乘为1。自然数n的阶乘写作n!。”
 */

function factorialize(num) {
  if (num < 0) {
    return -1;
  } else if (num === 0 || num === 1) {
    return 1;
  } else {
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
  }

  return num;
}

factorialize(10);