/**
 * 找到提供的句子中最长的单词，并计算它的长度。
 * 函数的返回值应该是一个数字。
 */
function findLongestWord(str) {
  var myStr = str.split(' ');
  var len = myStr.length;
  // 按照单词的长度从小到大排列，最后一个就是最长的单词
  myStr.sort(function(a, b){
    return a.length - b.length;
  });

  return myStr[len-1].length;
}

//方法二：
//function findLongestWord(str){
//  var myStr = str.split(' ');
//  var arrnum = [];
//  //把每个单词的长度都放进一个数组，然后取最大值
//  for(i=0 ; i < myStr.length; i++){
//    arrnum.push(myStr[i].length);
//  }
//  return Math.max.apply(null,arrnum);
//}

findLongestWord("The quick brown fox jumped over the lazy dog"); // 6
findLongestWord("May the force be with you"); // 5
findLongestWord("What if we try a super-long word such as otorhinolaryngology"); // 19