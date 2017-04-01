/**
 * 重要的事情说3遍！
 * 重复一个指定的字符串 num次，如果num是一个负数则返回一个空字符串。
 */

function repeat(str, num) {
  // repeat() 构造并返回一个新字符串，该字符串包含被连接在一起的指定数量的字符串的副本。
  return num > 0 ? str.repeat(num) : "";
}

repeat("abc", 3);