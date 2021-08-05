module.exports = function toReadable (number) {
    const arrSingle = [
        '',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
    ],
        arrDecimal = [
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen'
    ],
        arrTwoDigit = [
        '',
        '',
        'twenty', 
        'thirty', 
        'forty', 
        'fifty', 
        'sixty', 
        'seventy', 
        'eighty', 
        'ninety'
    ];

    let result = '';
    switch(number.length) {
        case(1):
        console.log(arrSingle[number]);
            return (result = arrSingle[number]);
            
        case(2):
            if (number >= 10 && number <= 19) {
                return (result = arrDecimal[number % 10]);
            } else {
                result = `${arrTwoDigit[Math.round(number / 10)]} + ' ' + ${arrSingle[number % 10]}`;
            }
            break;
        case(3):
            if (number >= 100 && number <= 109 ||
                number >= 200 && number <= 209 ||
                number >= 300 && number <= 309 ||
                number >= 400 && number <= 409 ||
                number >= 500 && number <= 509 ||
                number >= 600 && number <= 609 ||
                number >= 700 && number <= 709 ||
                number >= 800 && number <= 809 ||
                number >= 900 && number <= 909) {
                    return (result = `${arrSingle[Math.round(number / 100)]} + ' hundred ' + ${arrSingle[Math.round(number % 100)]}`);
            } else if (
                number >= 110 && number < 120 ||
                number >= 210 && number < 220 ||
                number >= 310 && number < 320 ||
                number >= 410 && number < 420 ||
                number >= 510 && number < 520 ||
                number >= 610 && number < 620 ||
                number >= 710 && number < 720 ||
                number >= 810 && number < 820 ||
                number >= 910 && number < 920) {
                    return (result = `${arrSingle[Math.round(number / 100)]} + ' hundred ' + ${arrDecimal[Math.round(number / 10) % 10]}`);
            } else {
                return (result = `${arrSingle[Math.round(number / 100)]} + ' hundred ' + ${arrTwoDigit[Math.round(number / 10) % 10]} + ' ' + ${arrSingle[number % 100]}`);
            }
    }
};
