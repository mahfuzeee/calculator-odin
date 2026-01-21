let result = NaN;
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

const screen = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

let operator;
let firstNum ;
let secondNum ;
let isTyping = false;

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        let typedButton = event.target.textContent;
        
        switch (typedButton) {
            case 'AC':
                screen.value = '';
                break;
            case 'C':
                screen.value = screen.value.slice(0, -1);
                break;
            case '+':
                if(!isTyping) {
                    operator = '+';
                    screen.value += typedButton;
                    firstNum = parseFloat(screen.value.slice(0, -1));
                    isTyping = true;
                } 
                break;
            case '/':
                if(!isTyping) {
                    operator = '/';
                    screen.value += typedButton;
                    firstNum = parseFloat(screen.value.slice(0, -1));
                    isTyping = true;
                }
                break;
            case '-':
                if(!isTyping) {
                    operator = '-';
                    screen.value += typedButton;
                    firstNum = parseFloat(screen.value.slice(0, -1));
                    isTyping = true;
                }
                break;
            case '*':
                if(!isTyping) {
                    operator = '*';
                    screen.value += typedButton;
                    firstNum = parseFloat(screen.value.slice(0, -1));
                    isTyping = true;
                }
                break;
            case '=':
                secondNum = parseFloat(screen.value.slice(screen.value.indexOf(operator)+1));
                operate(firstNum,operator,secondNum);
                screen.value = result;
                isTyping = false;
                console.log(firstNum);
                console.log(secondNum);
                console.log(operator);
                console.log(result);
                break;

            default:
                screen.value += typedButton;
        }
        
        
    });
});

console.log(screen);