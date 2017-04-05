/**
 * 下面我们来介绍风靡全球的凯撒密码Caesar cipher，又叫移位密码。
 * 移位密码也就是密码中的字母会按照指定的数量来做移位。
 * 一个常见的案例就是ROT13密码，字母会移位13个位置。由'A' ↔ 'N', 'B' ↔ 'O'，以此类推。
 * 写一个ROT13函数，实现输入加密字符串，输出解密字符串。
 * 所有的字母都是大写，不要转化任何非字母形式的字符(例如：空格，标点符号)，遇到这些特殊字符，跳过它们。
 */


function rot13(str) {
  var  arr = [];

  // 如果你知道 A, Z, M 的Unicode 值，你可以直接用65，77，90判断
  // 就算不知道也没关系，可以用 str.charCodeAt(index) 来获取需要的值
  var _A = "A".charCodeAt(0); // 65
  var _Z = "Z".charCodeAt(0); // 90
  var mid = (_A + _Z) / 2; // 77.5, 第13位就是M，77

  // 传入的字符串都是大写，而大写字母 A 到 Z 的 Unicode 值是升序排列的。
  // 加密算法的核心是前13个字母 Unicode 值+13，后13个字母 Unicode 值-13从字母表重新回滚。而其他大写字母以外的空白符符号等等字符原样不变。
  // 后13个字母如果+13就不是字母表里的字母了，所以需要回滚-26（+13-26 = -13）
  // 其余不是英文字母的都不需要更改
  for (var i = 0; i < str.length; i++ ) {
    var num = str[i].charCodeAt();

    if (num >= _A && num < mid) {
      num = num + 13;
    } else if (num > mid && num <= _Z) {
      num = num - 13;
    }
    arr.push(String.fromCharCode(num));
  }
  return arr.join("");
}

// 另一种写法
//function rot13(str) {
//  var len = str.length;
//  var temp = '';
//  var _A="A".charCodeAt(0);
//  var _Z="Z".charCodeAt(0);
//
//  for(var i=0; i < len; i++) {
//    var index = str[i].charCodeAt(0);
//    if (index < _A || index > _Z) {
//      // 不是字母表的不需要更改
//      temp += str[i];
//    } else {
//      var newChar = index - 13;
//      if(newChar < _A) {
//        // 回到字母表
//        newChar += 26;
//      }
//      temp += String.fromCharCode(newChar);
//    }
//  }
//
//  return temp;
//}

rot13("SERR PBQR PNZC");