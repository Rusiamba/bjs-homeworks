'use strict'

function calculateTotalMortgage(percent, contribution, amount, date) {
    let sum = amount - contribution;
    date = ((date - (new Date()))/1000 / 60 / 60 / 24 / 30.5).toFixed(0);
    percent = percent / 100 / 12;
    let monthPay = sum*(percent+percent/(((1+percent)**date)-1));
    let countMonth = (date * monthPay).toFixed(2);
    return +countMonth;
}

function getGreeting(name = 'Аноним') {
    if(name === null || name === '' || !isNaN(name)) {
        name = 'Аноним';
    }

    console.log('Привет, мир! Меня зовут ' + name);
    return 'Привет, мир! Меня зовут ' + name;
}
