// Reverse a String 反转字符串
// 先把字符串转化成数组，再借助数组的reverse方法翻转数组顺序，最后把数组转化成字符串。

function reverseString(str) {
  // String.split() -->>Array
  // Aray.reverse() -->>Array
  // Array.join() -->> String
  return str.split('').reverse().join('');
}

reverseString("hello");