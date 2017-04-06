/**
 * 比较两个数组，然后返回一个新数组，该数组的元素为两个给定数组中所有独有的数组元素。换言之，返回两个数组的差异。
 */

// 方法一：
function diff(arr1, arr2) {
  var newArr = [];
  var len1 = arr1.length;
  var len2 = arr2.length;
  // arr1有，arr2没有
  for(var i = 0; i < len1; i++) {
    if (arr2.indexOf(arr1[i]) < 0) {
      newArr.push(arr1[i]);
    }
  }
  // arr1没有，arr2有
  for(var j = 0; j < len2; j++) {
    if(arr1.indexOf(arr2[j]) < 0) {
      newArr.push(arr2[j]);
    }
  }
  return newArr;
}

// 方法一加工：
//function diff(arr1, arr2) {
//  var newArr = [];
//  var len1 = arr1.length;
//
//  for(var i = 0; i < len1; i++) {
//    var str = arr1[i];
//    if (arr2.indexOf(str) < 0) {
//      // arr1有，arr2没有
//      newArr.push(str);
//    } else {
//      // arr1 和 arr2 都有的元素
//      // splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。
//      // arr2 删除相同的元素，剩下的就是不同的元素
//      arr2.splice( arr2.indexOf(str), 1);
//    }
//  }
//
//  return newArr.concat(arr2);
//}

// 方法二：用 filter 代替 for
//function diff(arr1, arr2) {
//  var a1=arr1.filter(function(val){
//    return arr2.indexOf(val)< 0;
//  });
//  var a2=arr2.filter(function(val){
//    return arr1.indexOf(val)< 0;
//  });
//  return a1.concat(a2);
//}



diff([1, 2, 3, 5], [1, 2, 3, 4, 5]); // [4]
diff([], ["snuffleupagus", "cookie monster", "elmo"]); // ["snuffleupagus", "cookie monster", "elmo"]
diff(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]); // []