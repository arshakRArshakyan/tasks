const result = document.querySelector('.result');
const input = document.querySelector('.input-number');
const btn = document.querySelector('.btn');


btn.addEventListener('click', () => {
    handleRomanNumeral();
});

function handleRomanNumeral() {
    let rightSide = input.value;
    let leftSide= input.value;
    let i = 0;
    let romanNumber = [];
    while(leftSide != 0) {
        rightSide = leftSide % 10 * Math.pow(10, i);
        leftSide = parseInt(leftSide / 10);
        romanNumber.push(convertNumberToRoman(rightSide, i));
        i++;
    }

    result.innerHTML = reverseString(romanNumber);
}

function reverseString(romanNumber) {
     return romanNumber.reverse().join("");
}


function convertNumberToRoman(number, index) {

    let symbol = '';
    let fourMoreSymbol = '';
    let symbolForNine = '';
    let romanNumeral = '';
    let symbolData = {};

    if(index === 0) {
        symbolData.symbol  = "I";
        symbolData.fourMoreSymbol = "V";
        symbolData.symbolForNine = "X";
        symbolData.number = number;
        romanNumeral = getRomanNumeralBySymbol(symbolData);
    } else if(index === 1 || index === 4) {
        symbolData.symbol  = "X";
        symbolData.fourMoreSymbol = "L";
        symbolData.symbolForNine = "C";
        symbolData.number = parseInt(number / Math.pow(10, index));
        romanNumeral = getRomanNumeralBySymbol(symbolData);
    } else if(index === 2 || index === 5) {
        symbolData.symbol  = "C";
        symbolData.fourMoreSymbol = "D";
        symbolData.symbolForNine = "M";
        symbolData.number = parseInt(number / Math.pow(10, index));
        romanNumeral = getRomanNumeralBySymbol(symbolData);
    } else if(index === 3) {
        symbolData.symbol  = "M";
        symbolData.fourMoreSymbol = "V";
        symbolData.symbolForNine = "X";
        symbolData.number = parseInt(number / 1000);
        romanNumeral = getRomanNumeralBySymbol(symbolData);
    }

    return romanNumeral;
}

function getRomanNumeralBySymbol(data) {
    let romanLetter = '';

    switch(data.number) {
        case 1:
        romanLetter = data.symbol;
        break;
        case 2:
        romanLetter = data.symbol + data.symbol;
        break;
        case 3:
        romanLetter = data.symbol + data.symbol + data.symbol;
        break;
        case 4:
        romanLetter = data.symbol + data.fourMoreSymbol;
        break;
        case 5:
        romanLetter = data.fourMoreSymbol;
        break;
        case 6:
        romanLetter = data.fourMoreSymbol + data.symbol;
        break;
        case 7:
        romanLetter = data.fourMoreSymbol + data.symbol+symbol;
        break;
        case 8:
        romanLetter = data.fourMoreSymbol + data.symbol + data.symbol + data.symbol;
        break;
        case 9:
        romanLetter = data.symbol + data.symbolForNine;
        break;
        default :
        romanLetter = '';     
    }
    return romanLetter;
}