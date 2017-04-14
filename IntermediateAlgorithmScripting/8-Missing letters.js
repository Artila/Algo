/**
 * 从传递进来的字母序列中找到缺失的字母并返回它。
 * 如果所有字母都在序列中，返回 undefined。
 * 当前问题只考虑缺失一个字母的情况
 */

function fearNotLetter(str) {
  // 将字符串的每个字母的ASCII码存入数组
  var arr = str.split("").map(function(val) {
    return val.charCodeAt();
  });
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    // 后一项 - 当前项 不等于1，缺失的字母就是当前项的下一个字母
    var sub = arr[i+1] - arr[i];
    if (sub > 1) {
      return String.fromCharCode(arr[i] + 1);
    }
  }
  return undefined;
}

fearNotLetter("abce"); // d
