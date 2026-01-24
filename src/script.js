let result = undefined;

//Functions for mathematical operation
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    let result = a * b;
    return result.toFixed(3);
}

function divide(a, b) {
    let result;
    if(b == 0) result = 0;
    else result =  a / b;
    return result.toFixed(3);
}

//Function for producing result according to operator
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
//console.log(result);

//Variabls for DOM manipulation.
const screen = document.getElementById("display");
const numbersBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");
const clearAllBtn = document.getElementById('AC');
const clearBtn = document.getElementById('C');
const equalTo = document.getElementById('=');
const dot = document.getElementById('.');


//Varialbes for operand and operation.
let operator;
let firstNum ;
let secondNum ;
let isOperatorTyped = false;


//Function for clear screen.
function clearAll() {
    screen.value = '';
    firstNum = '';
    secondNum = '';
    isOperatorTyped = false;
}

function calculate() {
    if(isOperatorTyped) {
        secondNum = parseFloat(screen.value.slice(screen.value.indexOf(operator)+1));
    } 
    if(Number.isNaN(secondNum)) {
        secondNum = 0;
    }
    else {
        secondNum = secondNum;
    }
    if(Number.isNaN(firstNum)) {
        firstNum = 0;
        console.log(firstNum);
    }
    else {firstNum = firstNum;}

    console.log(`First ${firstNum} and second ${secondNum}`);
    operate(firstNum, operator, secondNum);
    console.log(`Result is ${result}`);
    clearAll();
    screen.value = result;
    //else screen.value = "Error";
     
}

clearAllBtn.addEventListener('click', () => {
    clearAll();
});

clearBtn.addEventListener('click', () => {
    if(screen.value.length > 0) {
        screen.value = screen.value.slice(0, -1);
    } else {
        screen.value = '0';
    }
    isOperatorTyped = false;
});

numbersBtn.forEach((button) => {
    button.addEventListener('click', (event) => {
        let typedButton = event.target.textContent;
        screen.value += typedButton;

    });

});


let dotTyped = false;
dot.addEventListener('click', () => {
    
    if(!dotTyped) {
        screen.value += '.';
        dotTyped = true;
    }
})

operatorBtn.forEach((button) => {
    button.addEventListener('click', (event) => {
        let typedOperator = event.target.textContent;
        function updateScreen() {
            screen.value += typedOperator;
            if(screen.value.length > 0) {
                firstNum = parseFloat(screen.value.slice(0, -1));
            } else {
                firstNum = 0;
            }

            isOperatorTyped = true;
        }

        switch (typedOperator) {

            case '+':
                if(!isOperatorTyped) {
                    operator = '+';
                    updateScreen();
                } else {
                    calculate();
                    isOperatorTyped = false;
                    operator = '+';
                    updateScreen();
                }
                dotTyped = false;
                break;
            
            case '-':
                if(!isOperatorTyped) {
                    operator = '-';
                    updateScreen();
                } else {
                    calculate();
                    isOperatorTyped = false;
                    operator = '-';
                    updateScreen();
                }
                dotTyped = false;
                break;
            case '*':
                if(!isOperatorTyped) {
                    operator = '*';
                    updateScreen();
                } else {
                    calculate();
                    isOperatorTyped = false;
                    operator = '*';
                    updateScreen();
                }
                dotTyped = false;
                break;

            case '/':
                if(!isOperatorTyped) {
                    operator = '/';
                    updateScreen();
                } else {
                    calculate();
                    isOperatorTyped = false;
                    operator = '/';
                    updateScreen();
                }
                dotTyped = false;

                break;
            }
    });
});

equalTo.addEventListener('click', () => {
    calculate();
    isOperatorTyped = false;
    dotTyped = false;
});


//Calculation from keyboard input.
function handleKyeboardInput(e) {
    function updateScreen() {
        screen.value += e.key;
        firstNum = parseFloat(screen.value.slice(0, -1));
        isOperatorTyped = true;
    }
    if(e.key >= '0' && e.key <= '9' || e.key === '.') {
        screen.value += e.key;
    } else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        switch(e.key) {
            case '+':
                if(!isOperatorTyped) {
                    operator = '+';
                    updateScreen();
                } else {
                    calculate();
                    isOperatorTyped = false;
                    operator = '+';
                    updateScreen();
                }
                dotTyped = false;
                break;
            
            case '-':
                if(!isOperatorTyped) {
                    operator = '-';
                    updateScreen();
                } else {
                    calculate();
                    isOperatorTyped = false;
                    operator = '-';
                    updateScreen();
                }
                dotTyped = false;
                break;
            case '*':
                if(!isOperatorTyped) {
                    operator = '*';
                    updateScreen();
                } else {
                    calculate();
                    isOperatorTyped = false;
                    operator = '*';
                    updateScreen();
                }
                dotTyped = false;
                break;

            case '/':
                if(!isOperatorTyped) {
                    operator = '/';
                    updateScreen();
                } else {
                    calculate();
                    isOperatorTyped = false;
                    operator = '/';
                    updateScreen();
                }
                dotTyped = false;

                break;
        } 
    } else if (e.key === 'Enter' || e.key === '=') {
        e.preventDefault();
        calculate();
    } else if (e.key === 'Escape') {
        clearAll();
    } else if (e.key === 'Backspace') {
        if(screen.value.length > 0) {
            screen.value = screen.value.slice(0, -1);
        } else {
            screen.value = '0';
        }
    }
}

document.addEventListener('keydown', handleKyeboardInput);