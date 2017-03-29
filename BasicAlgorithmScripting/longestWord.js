/**
 * 找到提供的句子中最长的单词，并计算它的长度。
 * 函数的返回值应该是一个数字。
 */
function findLongestWord(str) {
  var myStr=str.split(' ');
  var len = myStr.length;
  // 按照单词的长度从小到大排列，最后一个就是最长的单词
  myStr.sort(function(a, b){
    return a.length - b.length;
  });

  return myStr[len-1].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");