// ----------------------2020----------------------
let checkCashRegister = (price, cash, cid) => {
  // Get the change required for the purchase
  // Evaluate the cid to a single number value
  // Check evaluated cid with change
      // if evaluated cid is less than change
          // return { status: "INSUFFICIENT_FUNDS", change: [] }
      // if evaluated cid is equal to change
          // return { status: "CLOSED", change: changeFromCID }
      // else return { status: "OPEN", change: changeFromCID }
  
      let diff = cash - price;
      let evaluatedCID = cid.reduce((acc, val) => {
              return acc + val[1];
      }, 0);
      let CIDResponse = { status: "", change: [] };
      let CIDChange = [
          ["ONE HUNDRED", 0],
          ["TWENTY", 0],
          ["TEN", 0],
          ["FIVE", 0],
          ["ONE", 0],
          ["QUARTER", 0],
          ["DIME", 0],
          ["NICKEL", 0],
          ["PENNY", 0]
      ];
  
      let currencyValue = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
      let currencyValueInCID = [];
      let noOfCurrency = [];
      let noOfCurrencyChange = Array(9).fill(0);
  
      // Get the number each unit value of currency in the cid received
      cid.reverse().forEach((val,index) => {
          noOfCurrency.push(Number(((val[1])/currencyValue[index]).toFixed()));
          if (val[1] === 0) {
              currencyValueInCID.push(0)
          } else {
              currencyValueInCID.push(Number(((val[1])/noOfCurrency[index]).toFixed(2)));
          }
      });
  
      // Decrease the number each unit value of currency in the cid on every deduction of price and increase the corresponding number of unit of change to be given
      let changeToGive = diff;
      currencyValueInCID.forEach((val, index, array) => {
          if (val !== 0 && Number(changeToGive.toFixed(2)) >= val && noOfCurrency[index] > 0) {
              for (let i = 0; i < noOfCurrency[index]; i++) {
                  if (Number(changeToGive.toFixed(2)) >= val) {
                      changeToGive = Number(changeToGive.toFixed(2)) - val;
                      noOfCurrencyChange[index] += 1;
                  }
              }
          }
      });
  
      // Calculate the total value of each currency unit to be given as change 
      CIDChange.forEach((val, index) => {
          val[1] = Number((currencyValue[index] * noOfCurrencyChange[index]).toFixed(2));
      });
  
      // Removing any total value of currency unit equal to zero
      let changeWithMoreCIDLeft = CIDChange.reduce((acc, val) => {
          if (val[1] !== 0) {
            acc.push(val);   
          }
          return acc;
      }, []);
  
      // Update response object based on the change to be given
      if ( evaluatedCID < diff || changeToGive > 0  ) {
          CIDResponse.status = "INSUFFICIENT_FUNDS";
          return CIDResponse;
      } else if ( evaluatedCID === diff ) {
          CIDResponse.status = "CLOSED";
          CIDResponse.change = cid.reverse();
          return CIDResponse;
  
      } else {
          CIDResponse.status = "OPEN";
          CIDResponse.change = changeWithMoreCIDLeft;
          return CIDResponse;
      }
  }
  
  
  // checkCashRegister(206, 1059, [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 1000]])
  
  
  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);



// ------------------2023-----------------------------

function checkCashRegister(price, cash, cid) {

  let actualChange = cash - price;
  let remainingChange = actualChange;

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

  function generateCID(cid) {
    let sortedCID = [];

    for (let i = cid.length - 1; i > -1; i--) {

      sortedCID.push(cid[i]);
    }

    return sortedCID;
  }

  let newCID = generateCID(cid);

  function getCurrencyCount(newCID) {

    let cidWithCount = [];

    for (let i = 0; i < newCID.length; i++) {

      let count = Math.round(newCID[i][1] / currChart[i][1]);

      cidWithCount.push([newCID[i][0], currChart[i][1], newCID[i][1], count]);

    }

    return cidWithCount;
  }
  let newCIDWithCount = getCurrencyCount(newCID);
  let newCIDWithCountCopy;

  function getChange(newCIDWithCount) {

    let changeArray = [];
    newCIDWithCountCopy = newCIDWithCount;

    for (let i = 0; i < newCIDWithCount.length; i++) {
      let currCount = newCIDWithCount[i][3];
      let totalCurrValue;
      for (let j = 0; j < currCount; j++) {

        // newCIDWithCountCopy[i][3] is currency count available in the CID provided
        // newCIDWithCountCopy[i][2] is total value of each currency available in the CID provided
        // newCIDWithCountCopy[i][1] is unit value of each currency available in the CID provided
        // remainingChange is the change which gets updated after every deduction

        if (newCIDWithCountCopy[i][3] > 0 && remainingChange >= newCIDWithCountCopy[i][1] && remainingChange > 0) {

          remainingChange = Number((remainingChange - newCIDWithCountCopy[i][1]).toFixed(2));

          newCIDWithCountCopy[i][3]--;
          totalCurrValue = newCIDWithCountCopy[i][1] * (j + 1);

        }
      }

      if (totalCurrValue !== undefined) {
        
        changeArray.push([newCIDWithCountCopy[i][0],totalCurrValue]);
      }

    }

    return changeArray;

  }
  let finalChangeCID = getChange(newCIDWithCount);

  function checkCIDBalance(finalCID) {

    let finalChangeCIDCount = 0;

    for (let i = 0; i < finalCID.length; i++) {
      for (let j = 0; j < finalCID[i].length; j++) {

        finalChangeCIDCount += finalCID[i][3];
      }
    }

    if (finalChangeCIDCount > 0) {
      return true;
    }
    return false;
  }

  let cashRegResp = {};
  let isThereBalance = checkCIDBalance(newCIDWithCountCopy);

  if ( remainingChange > 0 ) {
    cashRegResp.status = "INSUFFICIENT_FUNDS";
    cashRegResp.change = [];

    console.log(cashRegResp);
    return cashRegResp;
  } else {
    if (isThereBalance) {
      cashRegResp.status = "OPEN";
      cashRegResp.change = finalChangeCID;
  
      console.log(cashRegResp);
      return cashRegResp;
    }
    cashRegResp.status = "CLOSED";
    cashRegResp.change = cid;

    console.log(cashRegResp);
    return cashRegResp;
  }
}


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

// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]); //should return an object.

// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]); //should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]); //should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); //should return {status: "INSUFFICIENT_FUNDS", change: []}.

// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); //should return {status: "INSUFFICIENT_FUNDS", change: []}.

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); //should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
