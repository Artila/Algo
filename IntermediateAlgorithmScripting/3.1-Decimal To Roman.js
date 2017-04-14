/**
 * 将给定的数字转换成罗马数字。
 * 所有返回的罗马数字都应该是大写形式。
 *
 * 单个罗马数字规则：
 * 1. 当一个罗马数字符号出现在比它更大的数字的右边时，要把它们加起来得到最终结果数字。
 * 例如： VI = V + I = 5 + 1 = 6
 * 2. 当一个罗马数字符号出现在比它更大的数字的左边时，要把它们相减得到最终结果数字。
 * 例如： IX = X - I = 10 - 1 = 9
 * 3. 同一个罗马数字内部不能包含3个以上相同字符。
 * 例如： IIII 是非法的，表示4应用 IV 。
 *
 * 常用的罗马数字与阿拉伯数字对应关系:
 * I	IV	V	 IX	 X	XL	L	 XC	  C	  CD  D	  CM	M
 * 1	4	  5	 9	10  40 50  90	 100 400 500 900 1000
 *
 * 罗马数字拼接规则：
 * Break the number into Thousands, Hundreds, Tens and Ones, and write down each in turn.
 * 翻译过来是，把给定数字拆分为千位、百位、十位、个位，然后再由大至小依次进行拼接。
 * 创建两个数组，最好也是由大到小，先讨论高位，再讨论低位。
 */

function convert(num) {
  var nums = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  var romans = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  var str = '';
  // 1到3999可以下面的方法表达出来，负数和0无法表达，大于3999的数字要使用第4条规则：
  // 在一个数的上面画一条横线，表示这个数增值 1,000 倍。
  // 暂时不考虑1到3999以外的数字。
  if (num < 1 || num > 3999) {
    return "-1";
  }
  // 对 nums 的每一项进行遍历，每当传入的 num 值大于或等于当前项时，将其对应的罗马数字推入之前声明的字符串，并把 num 值减去当前符合条件的数值。
  nums.forEach(function(item, index){
    while(num >= item){
      str += romans[index];
      num -= item;
    }
  });

  return str;
}

convert(29); // XXIX
convert(3999); // MMMCMXCIX