/**
 * 检查一个字符串(str)是否以指定的字符串(target)结尾。
 * 如果是，返回true;如果不是，返回false。
 */

function confirmEnding(str, target) {
  // substr() 方法返回一个字符串中从指定位置开始到指定字符数的字符。
  // 如果 start 为负值，则 substr 把它作为从字符串末尾开始的一个字符索引。
  var tar = str.substr(-target.length);

  return  tar === target;
}

confirmEnding("Bastian", "n"); // true
confirmEnding("Connor", "n"); // false
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"); // false
confirmEnding("He has to give me a new name", "name"); // true
confirmEnding("He has to give me a new name", "na"); // false
confirmEnding("He has to give me a new name", "me"); // true
