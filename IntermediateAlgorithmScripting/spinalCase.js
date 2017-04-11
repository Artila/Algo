/**
 * 将字符串转换为 spinal case。
 * Spinal case 是 all-lowercase-words-joined-by-dashes 这种形式的，也就是以连字符连接所有小写单词。
 */

function spinalCase(str) {
  // 把所有下划线 "_" 转为空格
  // 在所有单词的大写字母前添加空格，" $1"（目前测试的单词都是首字母大写）
  // 语句中首单词的首字母大写，会多出一个空格，去掉，/^\s/，"^" 表示语句开头， "\s" 表示空白符
  // 把所有空白符替换为“-”
  // "+" 表示匹配前一项一或多次，如果不加这个，有一个以上空格的地方会同时出现多个 "-" 并用情况。
  // 最后，把所有字母小写，大功告成！
  str = str.replace(/_/g, " ")
    .replace(/([A-Z])/g, " $1")
    .replace(/^\s/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();

  return str;
}

spinalCase("This Is Spinal Tap"); // this-is-spinal-tap
spinalCase("The_Andy_Griffith_Show"); // the-andy-griffith-show
spinalCase("thisIsSpinalTap"); // this-is-spinal-tap
spinalCase("This Is Spinal Tap"); // this-is-spinal-tap