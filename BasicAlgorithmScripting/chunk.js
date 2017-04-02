/**
 * 把一个数组arr按照指定的数组大小size分割成若干个数组块。
 * 例如:chunk([1,2,3,4],2)=[[1,2],[3,4]];
 * chunk([1,2,3,4,5],2)=[[1,2],[3,4],[5]];
 */

function chunk(arr, size) {
  var myArr=[];
  var len = arr.length;
  for (var i=0; i < len; i+=size){
    // 如果 end 大于数组长度，slice 也会一直提取到原数组末尾。
    // 返回的是新数组
    myArr.push(arr.slice(i,size+i));
  }
  return myArr;
}

chunk(["a", "b", "c", "d"], 2);