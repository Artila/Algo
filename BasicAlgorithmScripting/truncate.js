/**
 * 用瑞兹来截断对面的退路!
 * 截断一个字符串！
 * 如果字符串的长度比指定的参数num长，则把多余的部分用...来表示。
 * 切记，插入到字符串尾部的三个点号也会计入字符串的长度。
 * 但是，如果指定的参数num小于或等于3，则添加的三个点号不会计入字符串的长度。
 */

function truncate(str, num) {
  if(str.length <= num){
    return str;
  }else {
    if(num > 3){
      num -= 3;
    }
    // string.slice(start, end)提取一个字符串
    // string.substring(start, end)提取一个字符串,end不支持负数
    // string.substr(start, len)提取一个长度为len的字符串

    var truncated = str.substr(0, num);

    return truncated + "...";
  }
}
truncate("A-tisket a-tasket A green and yellow basket", 11);