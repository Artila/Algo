/**
 * 删除数组中的所有假值。
 * 在JavaScript中，假值有false、null、0、""、undefined 和 NaN。
 *
 * 如果参数是 0, -0,  null, false, NaN, undefined, 或者空字符串 (""),生成的Boolean对象的值为false. 其他任何值,包括任何对象或者字符串"false", 都会创建一个值为true的Boolean对象.
 * 不要将原始值true false,和值为true false的Boolean对象相混淆.
 * 任何值不为 undefined或者 null的对象, 包括值为false的Boolean对象, 在条件语句中,其值都将作为true来判断.
 */

function bouncer(arr) {
  console.log(arr.filter(Boolean));
  return arr.filter(Boolean);
  //等价于
  //return arr.filter(function(item,index,array){
  //  return Boolean(item);
  //});
}

bouncer([7, "ate", "", false, 9]); // [ 7, 'ate', 9 ]
bouncer([false, null, 0, NaN, undefined, ""]); // []
bouncer([1, null, NaN, 2, undefined]); // [ 1, 2 ]