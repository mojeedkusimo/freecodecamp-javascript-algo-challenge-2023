// -----------------------2022-----------------
let rot13 = (str) => {

    let capitalStr = str.toUpperCase();
    const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let cipherCode = {}
    let newStr = '';
    const nonAplha = /[^A-z]/gi;

    let cipherCodeGenerator = () => {
        for (let i = 0; i < alphabets.length; i++) {

            if (i < 13) {
                cipherCode[alphabets[i]] = alphabets[ i + 13];
            }
            else {
                cipherCode[alphabets[i]] = alphabets[ i - 13];
            }
        }
    }
    cipherCodeGenerator();

    for (let j = 0; j < capitalStr.length; j++) {

        if ( nonAplha.test(capitalStr[j])){
            newStr += capitalStr[j];
        }
        else {
            newStr += cipherCode[capitalStr[j]];
        }
    
    }

    return newStr;
}



// ----------------------2023------------------------
function rot13(str) {

    let newStr = "";

    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
            let newCharCode = str.charCodeAt(i) + 13;
            let newChar = "";

            if (newCharCode > 90) {
                let reGenCharCode = newCharCode - (90) + (64);
                newChar = String.fromCharCode(reGenCharCode);
                newStr += newChar;

            } else {
                newChar = String.fromCharCode(newCharCode);
                newStr += newChar;
            }

        } else {
            newStr += str[i];
        }

    }
    console.log(newStr);
    return newStr;
  }
  
  rot13("SERR PBQR PNZC");
  rot13("SERR CVMMN!");
  rot13("SERR YBIR?");
  rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");  
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

// Waiting:rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP
// Waiting:rot13("SERR CVMMN!") should decode to the string FREE PIZZA!
// Waiting:rot13("SERR YBIR?") should decode to the string FREE LOVE?
// Waiting:rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.