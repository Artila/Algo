/**
 * 依照一个存着新进货物的二维数组，更新存着现有库存(在 arr1 中)的二维数组. 如果货物已存在则更新数量 . 如果没有对应货物则把其加入到数组中，更新最新的数量. 返回当前的库存数组，且按货物名称的字母顺序排列.
 */

function updateInventory(arr1, arr2) {

  var len1 = arr1.length;
  //找出 arr2 有，arr1 没有，并且更新了 arr1 的数量
  var diff = arr2.filter(function(item) {
    var flag = true;
    for(var i = 0; i < len1; i++) {
      if(arr1[i][1] === item[1]){
        // 货物相同，更新数量
        arr1[i][0] += item[0];
        flag = false;
        break;
      }
    }
    // true 是不存在 arr1 的货物，false 是已存在 arr1 的货物
    return flag;
  });

  // 把没有存在的货物添加到 arr1
  arr1 = arr1.concat(diff);

  // 按货物名称的字母顺序排列
  arr1.sort(function (a, b) {
    return a[1].charCodeAt(0) - b[1].charCodeAt(0);
  });

  console.log(arr1);
  return arr1;
}

updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);
// [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]]

updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []);
// [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]]

updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);
//  [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]

updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]);
// [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]]
