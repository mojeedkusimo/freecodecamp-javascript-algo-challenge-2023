function convertToRoman(num) {
    let romanObj = {
        "0": "",
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
        "60": "LC",
        "70": "LCC",
        "80": "LCCC",
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
        "1000": "M" 
    }

    let strNum = num.toString();

    function getNumArray(strNum) {
        let result = [];
        let zeroCounter = strNum.length - 1;
        for (let i = 0; i < strNum.length; i++) {
            console.log(i);
            console.log(strNum[i]);
            result.push(strNum[i]);
        }
        return result;
    }

    function generateZeros(num, count) {

        let result = `${num}`;
        for (let i = 0; i < count + 1; i++) {

        }
    }

    let romanNum = getNumArray(strNum);
    console.log(romanNum);
    return romanNum;
   }
   
   convertToRoman(365);