// -------------------2020------------------------

let convertToRoman = (num) => {

    let stringNum = num.toString();
    const units = { 0: '', 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX', undefined: '', };
    const tens = { 0: '', 1: 'X', 2: 'XX', 3: 'XXX', 4: 'XL', 5: 'L', 6: 'LX', 7: 'LXX', 8: 'LXXX', 9: 'XC', undefined: '' };
    const hundreds = { 0: '', 1: 'C', 2: 'CC', 3: 'CCC', 4: 'CD', 5: 'D', 6: 'DC', 7: 'DCC', 8: 'DCCC', 9: 'CM', undefined: '' };
    const thousands = { 0: '', 1: 'M', 2: 'MM', 3: 'MMM', undefined: ''};

    if ( num > 3999 ) {
        return 'Please enter a number less than 4000 to get standard equivalent roman numerals of number provided';
    }
    else {
        let romanUnits = units[stringNum[stringNum.length-1]];
        let romanTens = tens[stringNum[stringNum.length-2]];
        let romanHundreds = hundreds[stringNum[stringNum.length-3]];
        let romanThousands = thousands[stringNum[stringNum.length-4]];

        let romanValue = romanThousands + romanHundreds + romanTens + romanUnits;
    
        return romanValue;    
    }
}


// --------------------2023----------------------

function convertToRoman(num) {
    let romanObj = {
        "1": "I",
        "2": "II",
        "3": "III",
        "4": "IV",
        "5": "V",
        "6": "VI",
        "7": "VII",
        "8": "VIII",
        "9": "IX",
        "10": "X",
        "20": "XX",
        "30": "XXX",
        "40": "XL",
        "50": "L",
        "60": "LX",
        "70": "LXX",
        "80": "LXXX",
        "90": "XC",
        "100": "C",
        "200": "CC",
        "300": "CCC",
        "400": "CD",
        "500": "D",
        "600": "DC",
        "700": "DCC",
        "800": "DCCC",
        "900": "CM",
        "1000": "M",
        "2000": "MM",
        "3000": "MMM" 
    }

    let strNum = num.toString();

    function getNumArray(strNum) {
        let result = [];
        let zeroCounter = strNum.length - 1;

        for (let i = 0; i < strNum.length; i++) {
            let normalizedNum = generateZeros(strNum[i], zeroCounter);
            result.push(normalizedNum);

            zeroCounter--;
        }
        return result;
    }

    function generateZeros(num, count) {

        let result = `${num}`;
        for (let i = 0; i < count; i++) {
            result += "0";
        }
        return result;
    }

    let formattedNumArray = getNumArray(strNum);

    function generateRomanFig(array) {
        
        let romanStr = "";
        for (let i = 0; i < array.length;  i++) {
            if (array[i] == 0) {
                romanStr += "";
            } else {
                romanStr += romanObj[array[i]];
            }
        }
        return romanStr;
    }
    
    let romanNum = generateRomanFig(formattedNumArray);
    
    console.log(romanNum);

    return romanNum;
   }
   
   convertToRoman(68);
   convertToRoman(83);