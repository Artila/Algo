/**
 * 写一个 function，它遍历一个对象数组（第一个参数）并返回一个包含相匹配的属性-值对（第二个参数）的所有对象的数组。如果返回的数组中包含 source 对象的属性-值对，那么此对象的每一个属性-值对都必须存在于 collection 的对象中。
 *
 * 例如，如果第一个参数是 [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]，第二个参数是 { last: "Capulet" }，那么你必须从数组（第一个参数）返回其中的第三个对象，因为它包含了作为第二个参数传递的属性-值对。
 *
 * 非常拗口，我的理解就是在参数1中找出包含参数2的对象，以数组的形式返回。
 */

function where(collection, source) {
  // Object.keys() 方法会返回一个由给定对象的自身可枚举属性组成的数组
  var keys =  Object.keys(source);

  return collection.filter(function(obj){
    // source 所有属性都要存在
    return keys.every(function(item){
      // collection元素中是否有指定的source的属性
      return obj.hasOwnProperty(item) && obj[item] === source[item];
    });
  });
}

where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
// [{ first: "Tybalt", last: "Capulet" }]

where([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 });
// [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }]

where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
// [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]