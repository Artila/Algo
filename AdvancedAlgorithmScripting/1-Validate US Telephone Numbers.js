/**
 * 如果传入字符串是一个有效的美国电话号码，则返回 true.
 * 用户可以在表单中填入一个任意有效美国电话号码. 下面是一些有效号码的例子(还有下面测试时用到的一些变体写法):
 * 555-555-5555
 * (555)555-5555
 * (555) 555-5555
 * 555 555 5555
 * 5555555555
 * 1 555 555 5555
 * 在本节中你会看见如 800-692-7753 or 8oo-six427676;laskdjf这样的字符串.
 * 你的任务就是验证前面给出的字符串是否是有效的美国电话号码. 区号是必须有的.
 * 如果字符串中给出了国家代码, 你必须验证其是 1. 如果号码有效就返回 true ; 否则返回 false.
 *
 * 思路：
 * 用正则表达式检查电话号码有效与否。
 * 1. 有没有以1开始，除了1其他单个数字开始都不对。如果有，接下来空格隔开。
 * 2. 3个数字或者被括号包起来的3个数字，以空格或者连接符分开，或者不用分开
 * 3. 3个数字，以空格或者连接符分开，或者不用分开
 * 4. 4个数字结尾
 * 5. 一共10个数字或者11个数字（以1开始）
 */

function telephoneCheck(str) {
  // ^1? 以1开始，？为匹配0次或1次
  // \d 匹配数字，等价于[0-9]。\d{3} 为数字连续出现3次时才匹配。|，或。\，转义。
  // [ -] 匹配空格或者连接符。
  // \d{4}$ 以数字连续出现4次为结尾
  var reg = /^1? ?(\d{3}|\(\d{3}\))[ -]?\d{3}[ -]?\d{4}$/;
  var re = reg.test(str);

  return re;
}


telephoneCheck("555-555-5555"); // true
telephoneCheck("5555555555"); // true
telephoneCheck("55555555"); // false

telephoneCheck("(555)555-5555");  // true
telephoneCheck("555)-555-5555"); // false
telephoneCheck("(555-555-5555"); // false

telephoneCheck("(6505552368)"); // false
telephoneCheck("(275)76227382"); // false
telephoneCheck("123**&!!asdf#"); // false

telephoneCheck("1 555-555-5555");  // true
telephoneCheck("1 555 555 5555");  // true
telephoneCheck("1 (555) 555-5555");  // true
telephoneCheck("1(555)555-5555");  // true
telephoneCheck("1 555)555-5555"); // false
telephoneCheck("1 456 789 4444");  // true

telephoneCheck("2 (757) 622-7382"); // false
telephoneCheck("0 (757) 622-7382"); // false
telephoneCheck("-1 (757) 622-7382"); // false
telephoneCheck("10 (757) 622-7382"); // false

