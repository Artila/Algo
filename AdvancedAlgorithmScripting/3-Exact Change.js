/**
 * 设计一个收银程序 checkCashRegister() ，其把购买价格(price)作为第一个参数 , 付款金额 (cash)作为第二个参数, 和收银机中零钱 (cid) 作为第三个参数.
 *
 * cid 是一个二维数组，存着当前可用的找零.
 *
 * 当收银机中的钱不够找零时返回字符串 "Insufficient Funds". 如果正好则返回字符串 "Closed".
 *
 * 否则, 返回应找回的零钱列表,且由大到小存在二维数组中.
 *
 * panny：1美分，nickel：5美分，dime：10美分，quarter：25美分，one：1美元，five：5美元，ten：10美元，twenty：20美元，one hundred：100美元
 *
 */

function checkCashRegister(price, cash, cid) {
  // 购买价格 = 付款金额，不用找零
  // 购买价格 > 付款金额，付款不够，需要收更多的钱
  if (price == cash) {
    return "No need back";
  } else if (price > cash) {
    return "Need more money";
  }

  // 下面就是开始购买价格 < 付款金额，需要找零
  // 有3种情况：
  // 1. 收银机中的钱不够，返回"Insufficient Funds";
  // 2. 收银机中的钱刚刚好，返回"Closed";
  // 3. 收银机中的钱足够，返回应找回的零钱列表,且由大到小存在二维数组中.

  var base = 100; // 基数
  var balance = (cash - price)*base; // 需要找零数
  var remain = 0; // 收银机零钱数
  var change = []; // 零钱列表

  for (var i = 0; i < cid.length; i++) {
    // JS浮点数运算会出现Bug，所以乘以100变整数解决这个问题
    remain += cid[i][1]*base;
  }

  if (remain == balance) {
    return "Closed";
  } else if (remain < balance) {
    return "Insufficient Funds";
  }

  var unit = [100.00, 20.00, 10.00, 5.00, 1.00, 0.25, 0.10, 0.05, 0.01];//单位
  //将给出的零钱数组参数先反转（按照单位从大到小排列），然后映射其单位，最后按照名称，单位，数量的格式排列，例如：[ 'ONE HUNDRED', 100, 100 ],  [ 'PENNY', 1.01, 0.01 ]
  var Cid = cid.reverse().map(function(item, i){
    item.push(unit[i]);
    return item;
  });

  Cid.forEach(function(item){
    var curName = item[0];
    var curMoney = item[1];
    var curUnit = item[2];
    if (curMoney <= 0) {
      return;//当前单位的金额 = 0，跳过
    }

    // 找零数大于当前单位
    if (balance >= curUnit*base) {
      // 找零数大于当前单位的金额
      if (balance >= curMoney*base) {
        change.push([curName, curMoney]);
        balance = balance - curMoney*base;
        // 当前单位的金额 = 0
        // 这里赋值不能用 curMoney = 0, 因为这样修改是不会影响到 item[1] 的,
        item[1] = 0;
      } else {
        // 找零数小于当前单位的金额
        var temp = Math.floor(balance / (curUnit*base)) * curUnit;
        change.push([curName, temp]);
        balance = balance - temp*base;
        item[1] -= temp;
      }
    }
  });

  if (balance > 0) {
    // 当前零钱找不了
    return "Insufficient Funds";
  } else {
    return change;
  }
}
checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
// [["QUARTER", 0.50]]

checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
// [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]]

checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
// Closed

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
// Insufficient Funds

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
// Insufficient Funds