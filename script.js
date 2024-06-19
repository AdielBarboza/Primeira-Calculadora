let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

let num1 = '';
let num2 = '';
let operator = '';
let result = '';

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let value = e.target.textContent;

        if (value === 'C') {
            display.value = '';
            num1 = '';
            num2 = '';
            operator = '';
        } else if (value === '=') {
            if (num1 && num2 && operator) {
                let result = calculate(num1, num2, operator);
                display.value = result;
                num1 = result;
                num2 = '';
                operator = '';
            }
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            if (num1) {
                operator = value;
                display.value += value;
            }
        } else {
            if (operator) {
                num2 += value;
                display.value += value;
            } else {
                num1 += value;
                display.value += value;
            }
        }
    });
});

function calculate(num1, num2, operator) {
    let result = 0;
    
    switch (operator) {
        case '+':
            result = parseFloat(num1) + parseFloat(num2);
             
            break;
        case '-':
            result = parseFloat(num1) - parseFloat(num2);
            break;
        case '*':
            result = parseFloat(num1) * parseFloat(num2);
            break;
        case '/':
            result = parseFloat(num1) / parseFloat(num2);
            break;    
    } return(result);
    }
    