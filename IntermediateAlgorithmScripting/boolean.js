/**
 * 检查一个值是否是基本布尔类型，并返回 true 或 false。
 * 基本布尔类型即 true 和 false。
 * 注意：并不是判断值是 true or false，而是判断值是不是布尔类型。
 */

function boo(bool) {
  return typeof bool === 'boolean';
}

boo(null); // false, object, null 表示 "什么都没有", 是一个只有一个值的特殊类型。表示一个空对象引用。

boo(true); // true
boo(false); // true

boo("true"); // false, string
boo("false"); // false, string

boo(NaN); // false, number, NaN是"Not-A-Number"的缩写
boo(1); // false, number

boo([1, 2, 3]); // false, object, 数组是一种特殊的对象类型。
boo({ "a": 1 }); // false, object

boo([].slice); // false, function