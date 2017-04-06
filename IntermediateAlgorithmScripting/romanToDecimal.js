/**
 * 将给定的罗马数字转换成阿拉伯数字。
 * 范围：1到3999的数字
 */

function convert(roman) {
  var nums = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  var romans = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  var len = roman.length;
  var lens = romans.length;
  var sum = 0;

  for (var i = 0; i < len;) {
    //未匹配的罗马数字
    var str = roman.slice(i);

    for (var j = 0; j < lens; j++) {
      if (str.indexOf(romans[j]) == 0) {
        sum += nums[j];
        // 跳过已匹配的罗马数字
        i += romans[j].length;
        break;
      }
    }
  }

  return sum;
}

convert('XII'); // 12
convert('XXIX'); // 29
convert('LXXXIII'); // 83
convert('XCIX'); // 99
convert('DCCXCVIII'); // 798
convert('DCCCXCI'); // 891
convert('MVI'); // 1006
convert('MXXIII'); // 1023
convert('MMXIV'); // 2014
convert('MMMCMXCIX'); // 3999

