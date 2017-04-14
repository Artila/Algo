/**
 * 把指定的字符串翻译成 pig latin。
 *
 * Pig Latin 把一个英文单词的第一个辅音或辅音丛（consonant cluster）移到词尾，然后加上后缀 "ay"。
 * 如果单词以元音开始，你只需要在词尾添加 "way" 就可以了。
 */

function translate(str) {
  var newStr = "";
  // 查找方括号之间的任何字符。
  var reg = /[aeiou]/gi;
  // str.match(regexp); 会返回所有符合条件的匹配项，并以数组形式返回。
  // 首字母是不是元音
  if (str[0].match(reg)) {
    // 元音字母为首字母时，给字符串加way后缀
    newStr = str + "way";
  } else {
    // 第一个元音的位置
    var i = str.indexOf(str.match(reg)[0]);
    // 元音后 + 元音前的辅音 + ay
    newStr = str.substr(i) + str.substr(0, i) + "ay";
  }
  return newStr;
}

translate("consonant"); // onsonantcay
translate("eight"); // eightway