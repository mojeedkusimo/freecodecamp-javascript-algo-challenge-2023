function checkCashRegister(price, cash, cid) {

  let change = cash - price;
  let changeCopy = change;

  let currChart = [
    ["ONE HUNDRED", 100],
    ["TWENTY", 20],
    ["TEN", 10],
    ["FIVE", 5],
    ["ONE", 1],
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01],
  ];

  let iterationBoundary = 0;
  function generateCID(cid) {
    let sortedCID = [];

    for (let i = cid.length - 1; i > -1; i--) {

      sortedCID.push(cid[i]);
    }
    // console.log(sortedCID);
    return sortedCID;
  }

  let newCID = generateCID(cid);

  function getCurrencyCount(newCID) {

    let cidWithCount = [];

    for (let i = 0; i < newCID.length; i++) {
      
      let count = Math.round(newCID[i][1]/currChart[i][1]);
      iterationBoundary += count;
        cidWithCount.push([newCID[i][0], currChart[i][1], newCID[i][1], count]);
        
    }

    return cidWithCount;
  }
  let newCIDWithCount = getCurrencyCount(newCID);

  console.log(newCIDWithCount);
  // console.log(iterationBoundary);

  function getChange(newCIDWithCount) {
    let newCIDWithCountCopy = newCIDWithCount;
    let checker = 0;
    for (let i = 0; i < newCIDWithCount.length -1; i++) {

      for (let j = 0; j < newCIDWithCount[i][2]; j++) {
        checker++;
        console.log(checker);
        // console.log(newCIDWithCountCopy[i][2]);
        // console.log(changeCopy);
        // console.log(newCIDWithCountCopy[i][1]);
        if (newCIDWithCountCopy[i][3] > 0 && changeCopy >= newCIDWithCountCopy[i][1] && changeCopy > 0) {

          changeCopy = changeCopy - newCIDWithCountCopy[i][1];
          newCIDWithCountCopy[i][3]--;
        }
      }
    }
    console.log(newCIDWithCountCopy);
    console.log(change);
    console.log(changeCopy);

  }
  getChange(newCIDWithCount);

}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.


// Currency Unit	Amount
// Penny	$0.01 (PENNY)
// Nickel	$0.05 (NICKEL)
// Dime	$0.1 (DIME)
// Quarter	$0.25 (QUARTER)
// Dollar	$1 (ONE)
// Five Dollars	$5 (FIVE)
// Ten Dollars	$10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)
// See below for an example of a cash-in-drawer array:

// [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]); //should return an object.

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]); //should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]); //should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); //should return {status: "INSUFFICIENT_FUNDS", change: []}.

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); //should return {status: "INSUFFICIENT_FUNDS", change: []}.

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); //should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}

// let x = [["DOLLAR",,2],["FIVE",,10]];
// console.log(x[1]);
// let y = {
//   "DOLLAR": [,2],
//   "FIVE": [,10]
// }
// console.log(y.hasOwnProperty("DOLLAR"));
// console.log(x[0].includes("DOLLAR"));