
const elementUSD = document.querySelector('[data-value="USD"]');
const elementEUR = document.querySelector('[data-value="EUR"]');
const elementPLN = document.querySelector('[data-value="PLN"]');

const input = document.querySelector('#input');
const select = document.querySelector('#select');
const result = document.querySelector('#result');


getCurrencies('USD');
getCurrencies('EUR');
getCurrencies('PLN');

async function getCurrencies (base) {
    const response = await fetch(`https://api.exchangerate.host/latest?base=${base}`);
    const data = await response.json();
    const result = await data;

    if(base === 'USD') {
        result.USD = result.rates.UAH;
        elementUSD.textContent = result.USD.toFixed(2);
    } else if (base === 'EUR') {
        result.EUR = result.rates.UAH;
        elementEUR.textContent = result.EUR.toFixed(2);
    } else {
        result.PLN = result.rates.UAH;
        elementPLN.textContent = result.PLN.toFixed(2);
    }   
}

input.oninput = convertValue;
select.oninput = convertValue;

function convertValue() {
    if (select.value === 'USD') {
        result.value = (parseFloat(input.value) / +elementUSD.innerHTML).toFixed(2)
    }
    if (select.value === 'EUR') {
        result.value = (parseFloat(input.value) / +elementEUR.innerHTML).toFixed(2)
    }
    if (select.value === 'PLN') {
        result.value = (parseFloat(input.value) / +elementPLN.innerHTML).toFixed(2)
    }
}