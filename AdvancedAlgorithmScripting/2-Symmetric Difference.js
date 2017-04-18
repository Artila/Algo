/**
 * 创建一个函数，接受两个或多个数组，返回所给数组的 对等差分(symmetric difference) (△ or ⊕)数组.
 *
 * 给出两个集合 (如集合 A = {1, 2, 3} 和集合 B = {2, 3, 4}), 而数学术语 "对等差分" 的集合就是指由所有只在两个集合其中之一的元素组成的集合(A △ B = C = {1, 4}).
 *
 * 对于传入的额外集合 (如 D = {2, 3}), 你应该安装前面原则求前两个集合的结果与新集合的对等差分集合 (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).
 *
 * 分析：传入 n 个数组，数组1和数组2去重后得到一个新数组，新数组继续和数组3去重，又得到新数组，新数组又和数组4去重，以此类推，直到最后一个新数组与数组 n 去重得到结果。
 */

function sym(args) {
  // 将 arguments 转换为真正的数组
  var arrs = Array.from(arguments);
  // reduce() 方法对累加器和数组中的每个元素 (从左到右)应用一个函数，将其减少为单个值。
  var arr = arrs.reduce(function(accu, cur){
    // accu 和 cur 的差异元素
    var a = accu.filter(function(item){
      return cur.indexOf(item) < 0;
    });
    var b = cur.filter(function(item){
      return accu.indexOf(item) < 0;
    });

    return a.concat(b);
  });

  // 去掉重复的
  return arr.filter(function(item,index,array){
    return array.indexOf(item) == index;
  });
}

sym([1, 2, 3], [5, 2, 1, 4]); // [3, 4, 5]
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]); // [1, 4, 5]
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]); // [1, 4, 5]

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]); // [2, 3, 4, 6, 7]
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]); //[1, 2, 4, 5, 6, 7, 8, 9]