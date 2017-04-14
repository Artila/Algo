/**
 * 将字符串中的字符 &、<、>、" （双引号）, 以及 ' （单引号）转换为它们对应的 HTML 实体。
 * 例如：convert("<>") 应该返回 &​lt;&​gt;。
 */

function convert(str) {
  str = str.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;").replace(/'/g,"&apos;");
  return str;
}

//方法二：
//function convert(str) {
//  var p=/[&<>"']/g;
//  str=str.replace(p,function(char){
//    switch(char){
//      case '&':
//        return '&amp;';
//      case '<':
//        return '&lt;';
//      case '>':
//        return '&gt;';
//      case '"':
//        return '&quot;';
//      case "'":
//        return '&apos;';
//    }
//  });
//  return str;
//}

convert("Dolce & Gabbana"); // Dolce &​amp; Gabbana
convert("Sixty > twelve"); // Sixty &​gt; twelve