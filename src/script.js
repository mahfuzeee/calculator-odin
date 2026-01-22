let result = undefined;
function add(a, b) {
    return parseFloat(a + b);
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    let result =  a / b;
    return result.toFixed(3);
}

function operate(num1, operator, num2 ) {
    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
    }
    

}
//operate(6.8, '+', 4);
console.log(result);

const screen = document.getElementById("display");
const numbersBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");
const clearAllBtn = document.getElementById('AC');
const clearBtn = document.getElementById('C');
const equalTo = document.getElementById('=');
console.log(operatorBtn[2]);
console.log(numbersBtn);

let operator;
let firstNum ;
let secondNum ;
let isTyping = false;

function clearAll() {
    screen.value = '';
    firstNum = '';
    secondNum = '';
}

clearAllBtn.addEventListener('click', () => {
    clearAll();
});

clearBtn.addEventListener('click', () => {
    screen.value = screen.value.slice(0, -1);
});

numbersBtn.forEach((button) => {
    button.addEventListener('click', (event) => {
        let typedButton = event.target.textContent;
        screen.value += typedButton;
        
                secondNum = parseFloat(screen.value.slice(screen.value.indexOf(operator)+1));
                operate(firstNum,operator,secondNum);
                //screen.value = result;
                isTyping = false;
                console.log(firstNum);
                console.log(secondNum);
                console.log(operator);
                console.log(result);
        
    });
});

operatorBtn.forEach((button) => {
    button.addEventListener('click', (event) => {
        let typedOperator = event.target.textContent;

        switch (typedOperator) {
            case 'AC':
                screen.value = '';
                break;
            case 'C':
                screen.value = screen.value.slice(0, -1);
                break;
            case '+':
                if(!isTyping) {
                    operator = '+';
                    screen.value += typedOperator;
                    firstNum = parseFloat(screen.value.slice(0, -1));
                    isTyping = true;
                } 
                break;
            case '/':
                if(!isTyping) {
                    operator = '/';
                    screen.value += typedOperator;
                    firstNum = parseFloat(screen.value.slice(0, -1));
                    isTyping = true;
                }
                break;
            case '-':
                if(!isTyping) {
                    operator = '-';
                    screen.value += typedOperator;
                    firstNum = parseFloat(screen.value.slice(0, -1));
                    isTyping = true;
                }
                break;
            case '*':
                if(!isTyping) {
                    operator = '*';
                    screen.value += typedOperator;
                    firstNum = parseFloat(screen.value.slice(0, -1));
                    isTyping = true;
                }
                break;
            }
    });
});

equalTo.addEventListener('click', () => {
    secondNum = parseFloat(screen.value.slice(screen.value.indexOf(operator)+1));
    operate(firstNum,operator,secondNum);
    clearAll();
    screen.value = result;
    isTyping = false;
})

console.log(screen);