/**
 * 确保字符串的每个单词首字母都大写，其余部分小写。
 * 像'the'和'of'这样的连接符同理。
 */

function titleCase(str) {
  var arr = str.toLowerCase().split(' ');
  var len = arr.length;

  for (var i=0; i < len; i++){
    //取首字母
    var char = arr[i].charAt(0);
    arr[i] = arr[i].replace(char, char.toUpperCase());
    //第二种写法
    //arr[i] = char.toUpperCase() + arr[i].substr(1);
  }

  return arr.join(' ');
}

titleCase("I'm a little tea pot");