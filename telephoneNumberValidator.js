// --------------------------2020------------------------------
let telephoneCheck = (str) => {

  const FIRSTPATTERN = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
  const SECONDPATTERN = /^1\s[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
  const THIRDPATTERN = /^1\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}$/;
  const FOURTHPATTERN = /^[0-9]{10}$/;
  const FIFTHPATTERN = /^1{0,1}\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/;
  const SIXTHPATTERN = /^1\s[0-9]{3}\s[0-9]{3}\s[0-9]{4}$/;

  if (FIRSTPATTERN.test(str) || SECONDPATTERN.test(str) || THIRDPATTERN.test(str) || FOURTHPATTERN.test(str) || FIFTHPATTERN.test(str) || SIXTHPATTERN.test(str)) {
      return true;
  }
  else {
      return false;
  }
}

console.log(telephoneCheck('3333333333'));


// -----------------------2023-------------------------------


function telephoneCheck(str) {

  // 555-555-5555
  // (555)555-5555
  // (555) 555-5555
  // 555 555 5555
  // 5555555555
  // 1 555 555 5555
  let conditionOne = /^\d{3}-\d{3}-\d{4}$/;
  let conditionTwo = /^\(\d{3}\)\d{3}-\d{4}$/;
  let conditionThree = /^\(\d{3}\)\s\d{3}-\d{4}$/;
  let conditionFour = /^\d{3}\s\d{3}\s\d{4}$/;
  let conditionFive = /^\d{10}$/;
  let conditionSix = /^1\s\d{3}\s\d{3}\s\d{4}$/;
  let conditionSeven = /^1\s\d{3}-\d{3}-\d{4}$/;
  let conditionEight = /^1\(\d{3}\)\d{3}-\d{4}$/;
  let conditionNine = /^1\s\(\d{3}\)\s\d{3}-\d{4}$/;
  let conditionsArray = [conditionOne, conditionTwo, conditionThree, conditionFour, conditionFive, conditionSix, conditionSeven, conditionEight, conditionNine];

  for (let i = 0; i < conditionsArray.length; i++) {

    if (conditionsArray[i].test(str)) {
      console.log(`${i+1} => ${str} => ${true}`);
      return true;
    }
  }

  console.log(`${str} => ${false}`);
  return false;

  // if (conditionNine.test(str)) {
  //   console.log(`${str} => ${true}`);
  //   return true;
  // }

  // console.log(`${str} => ${false}`);
  // return false;
  
}

telephoneCheck("555-555-5555");// should return a boolean.
telephoneCheck("1 555-555-5555");// should return true.
telephoneCheck("1 (555) 555-5555");// should return true.
telephoneCheck("5555555555");// should return true.
telephoneCheck("555-555-5555");// should return true.
telephoneCheck("(555)555-5555");// should return true.
telephoneCheck("1(555)555-5555");// should return true.
telephoneCheck("11(555)555-5555");// should return false.

telephoneCheck("555-5555");// should return false.
telephoneCheck("5555555");// should return false.
telephoneCheck("1 555)555-5555");// should return false.

telephoneCheck("1 555 555 5555");// should return true.
telephoneCheck("1 456 789 4444");// should return true.

telephoneCheck("123**&!!asdf#");// should return false.
telephoneCheck("55555555");// should return false.
telephoneCheck("(6054756961)");// should return false.
telephoneCheck("2 (757) 622-7382");// should return false.
telephoneCheck("0 (757) 622-7382");// should return false.
telephoneCheck("-1 (757) 622-7382");// should return false.
telephoneCheck("2 757 622-7382");// should return false.
telephoneCheck("10 (757) 622-7382");// should return false.
telephoneCheck("27576227382");// should return false.
telephoneCheck("(275)76227382");// should return false.
telephoneCheck("2(757)6227382");// should return false.
telephoneCheck("2(757)622-7382");// should return false.
telephoneCheck("555)-555-5555");// should return false.
telephoneCheck("(555-555-5555");// should return false.
telephoneCheck("(555)5(55?)-5555");// should return false.
telephoneCheck("55 55-55-555-5");// should return false.
telephoneCheck("11 555-555-5555");// should return false.
telephoneCheck("11 555 555 5555");// should return false.








// Return true if the passed string looks like a valid US phone number.

// The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
// For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

// telephoneCheck("555-555-5555");// should return a boolean.
// telephoneCheck("1 555-555-5555");// should return true.
// telephoneCheck("1 (555) 555-5555");// should return true.
// telephoneCheck("5555555555");// should return true.
// telephoneCheck("555-555-5555");// should return true.
// telephoneCheck("(555)555-5555");// should return true.
// telephoneCheck("1(555)555-5555");// should return true.
// telephoneCheck("555-5555");// should return false.
// telephoneCheck("5555555");// should return false.
// telephoneCheck("1 555)555-5555");// should return false.
// telephoneCheck("1 555 555 5555");// should return true.
// telephoneCheck("1 456 789 4444");// should return true.
// telephoneCheck("123**&!!asdf#");// should return false.
// telephoneCheck("55555555");// should return false.
// telephoneCheck("(6054756961)");// should return false.
// telephoneCheck("2 (757) 622-7382");// should return false.
// telephoneCheck("0 (757) 622-7382");// should return false.
// telephoneCheck("-1 (757) 622-7382");// should return false.
// telephoneCheck("2 757 622-7382");// should return false.
// telephoneCheck("10 (757) 622-7382");// should return false.
// telephoneCheck("27576227382");// should return false.
// telephoneCheck("(275)76227382");// should return false.
// telephoneCheck("2(757)6227382");// should return false.
// telephoneCheck("2(757)622-7382");// should return false.
// telephoneCheck("555)-555-5555");// should return false.
// telephoneCheck("(555-555-5555");// should return false.
// telephoneCheck("(555)5(55?)-5555");// should return false.
// telephoneCheck("55 55-55-555-5");// should return false.
// telephoneCheck("11 555-555-5555");// should return false.