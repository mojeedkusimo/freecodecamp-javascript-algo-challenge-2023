// -----------------------2020-------------------
let palindrome = (str) => {
    let newString = str.replace(/[^A-Z0-9]/gi, '').toLowerCase();
    let revString = '';

    for (let i = newString.length - 1; i > -1; i--) {
        revString += newString[i]
    }
    
    if (newString === revString) {
        return true;
    }
    else {
        return false;
    }
}

// --------------------2023----------------------
function palindrome(str) {

    let nonAlphaNumChars = /[^A-Za-z0-9]/g;
    let newStr = str.replace(nonAlphaNumChars,"").toLowerCase();

    let startTime = new Date();
    console.log(startTime);
    let j = newStr.length - 1;
    for (let i = 0; i <  newStr.length; i++) {

        if (newStr[i] !== newStr[j]) {
            let endTime = new Date();
            console.log(endTime);
            console.log(false);
            return false;
        }
        j--;
    }
    let endTime = new Date();
    console.log(endTime);
    console.log(true);
    return true;
}

palindrome("A man, a plan, a canal. Panama");
// palindrome("eyes");