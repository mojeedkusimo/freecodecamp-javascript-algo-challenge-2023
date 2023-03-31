// -----------------------2020-------------------
let palindrome1 = (str) => {
    let startTime = new Date();
    console.log(startTime);
    let newString = str.replace(/[^A-Z0-9]/gi, '').toLowerCase();
    let revString = '';

    for (let i = newString.length - 1; i > -1; i--) {
        revString += newString[i]
    }
    
    if (newString === revString) {
        let endTime = new Date();
        console.log(endTime);
        console.log(true);
        return true;
    }
    else {
        return false;
    }
}

// --------------------2023----------------------
function palindrome2(str) {
    let startTime = new Date();
    console.log(startTime);
    let nonAlphaNumChars = /[^A-Za-z0-9]/g;
    let newStr = str.replace(nonAlphaNumChars,"").toLowerCase();


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

// palindrome1("A man, a plan, a canal. Panama");
palindrome2("A man, a plan, a canal. Panama");
// palindrome("eyes");