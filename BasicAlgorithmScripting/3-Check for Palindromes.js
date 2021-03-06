/**
 *  如果给定的字符串是回文，返回true，反之，返回false。
 *  如果一个字符串忽略标点符号、大小写和空格，正着读和反着读一模一样，那么这个字符串就是palindrome(回文)。
 *  注意：需要去掉字符串多余的标点符号和空格，然后把字符串转化成小写来验证此字符串是否为回文。
 */
function palindrome(str) {
  // 把非单词，下划线去掉
  var temp = str.replace(/[\W_]/g,'').toLowerCase();
  // 和反转后的单词比较
  return temp === temp.split('').reverse().join('');
}


palindrome("eye"); // true
palindrome("race car"); // true
palindrome("My age is 0, 0 si ega ym."); // true
palindrome("0_0 (: /-\ :) 0-0"); // true
palindrome("1 eye for of 1 eye."); // false