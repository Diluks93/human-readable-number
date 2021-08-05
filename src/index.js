module.exports = function toReadable (number) {
    const arrBeforeNineteen = [
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
        arrAfterTwenty = [
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
    if (number == 0) {
        return 'zero';
    } else if (number > 0 && number <= 19) {
        return (result = arrBeforeNineteen[number]);
    } else if (
        number == 20 || 
        number == 30 || 
        number == 40 || 
        number == 50 || 
        number == 60 || 
        number == 70 || 
        number == 80 || 
        number == 90) {
        return (result = `${arrAfterTwenty[number / 10]}`);
    } else if (number > 20 && number < 100) {
        return (result = `${arrAfterTwenty[Math.floor(number / 10)]} ${
            arrBeforeNineteen[number % 10]
        }`);
    } else if (
        number == 100 ||
        number == 200 ||
        number == 300 ||
        number == 400 ||
        number == 500 ||
        number == 600 ||
        number == 700 ||
        number == 800 ||
        number == 900
    ) {
        return (result = `${arrBeforeNineteen[number / 100]} hundred`);
    } else if (
        number % 10 == 0 &&
        number != 110 &&
        number != 210 &&
        number != 310 &&
        number != 410 &&
        number != 510 &&
        number != 610 &&
        number != 710 &&
        number != 810 &&
        number != 910
        ) {
        return (result = `${arrBeforeNineteen[Math.floor(number / 100)]} hundred ${arrAfterTwenty[Math.floor(number / 10) % 10]}`);
    } else if (
        (number > 100 && number <= 119) ||
        (number > 200 && number <= 219) ||
        (number > 300 && number <= 319) ||
        (number > 400 && number <= 419) ||
        (number > 500 && number <= 519) ||
        (number > 600 && number <= 619) ||
        (number > 700 && number <= 719) ||
        (number > 800 && number <= 819) ||
        (number > 900 && number <= 919)
    ) {
        return (result = `${arrBeforeNineteen[Math.floor(number / 100)]} hundred ${arrBeforeNineteen[number % 100]}`);
    } else {
        return (result = `${arrBeforeNineteen[Math.floor(number / 100)]} hundred ${arrAfterTwenty[Math.floor(number / 10) % 10]} ${arrBeforeNineteen[number % 10]}`);
    }
};
