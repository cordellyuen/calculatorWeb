const buttons = document.querySelectorAll("button");
const displayValue = document.querySelector("#displayValue");
let decimalUsed = false;

function operate(sign, a, b) {
    switch(sign) {
        case "+": return add(a, b); break;
        case "-": return subtract(a, b); break;
        case "*": return multiply(a, b); break;
        case "/": return divide(a, b); break;
        default: console.log("INVALID SIGN");
    }
}

function add(a, b) {
    a = Number(a);
    b = Number(b);

    return a + b;
}

function subtract(a, b) {
    a = Number(a);
    b = Number(b);

    return a - b;
}

function multiply(a, b) {
    a = Number(a);
    b = Number(b);

    return a * b;
}

function divide(a, b) {
    a = Number(a);
    b = Number(b);

    if(b === 0) {
        displayValue.textContent = "Divide by 0 ERROR";
        return;
    }

    return a / b;
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if(button.textContent === "AC") {
            displayValue.textContent = "";
            decimalUsed = false;
        }
        else if(button.textContent === "DEL") {
            let newValue;
            let input = displayValue.textContent;

            newValue = input.substr(0, input.length - 1);
            displayValue.textContent = newValue;
        }
        else if(button.textContent === ".") {
            if(decimalUsed === false) {
                displayValue.textContent += button.textContent;
                decimalUsed = true;
            }
        }
        else if(button.textContent === "=") {
            if( displayValue.textContent.indexOf("+", 1) === -1 && 
                displayValue.textContent.indexOf("-", 1) === -1 && 
                displayValue.textContent.indexOf("x", 1) === -1 && 
                displayValue.textContent.indexOf("/", 1) === -1    ) {
            
                displayValue.textContent = displayValue.textContent;
                decimalUsed = false;  
            }
            else {
                parseInput(displayValue.textContent);
            }
        }
        else if(button.textContent === "+" || button.textContent === "-" || 
                    button.textContent === "x" || button.textContent === "/") {
            
            if( displayValue.textContent.indexOf("+", 1) === -1 && 
                displayValue.textContent.indexOf("-", 1) === -1 && 
                displayValue.textContent.indexOf("x", 1) === -1 && 
                displayValue.textContent.indexOf("/", 1) === -1) {
                
                    displayValue.textContent += button.textContent;
                    decimalUsed = false;  
            }
            else {
                parseInput(displayValue.textContent);
                displayValue.textContent += button.textContent;
            }
        }
        else if(displayValue.textContent.length < 18) {
            displayValue.textContent += button.textContent;
        }
    });
});

function parseInput(input) {
    let answer = 0;
    let inputOne = "";

    inputLoop: for(let i = 1; i <= input.length; i++) {
        switch(input[i]) {
            case "+": 
                inputOne = input.slice(0, input.indexOf("+"));
                inputTwo = input.slice((input.indexOf("+") + 1));
                
                if(inputTwo !== "") {
                    answer = operate("+", inputOne, inputTwo);
                }
                else {
                    answer = displayValue.textContent;
                }
            break inputLoop;

            case "-": 
                inputOne = input.slice(0, input.indexOf("-", 1));
                inputTwo = input.slice((input.indexOf("-", 1) + 1));
            
                if(inputTwo !== "") {
                    answer = operate("-", inputOne, inputTwo);
                }
                else {
                    answer = displayValue.textContent;
                }
            break inputLoop;

            case "x": 
                inputOne = input.slice(0, input.indexOf("x"));
                inputTwo = input.slice((input.indexOf("x") + 1));
        
                if(inputTwo !== "") {
                    answer = operate("*", inputOne, inputTwo);
                }
                else {
                    answer = displayValue.textContent;
                }
            break inputLoop;

            case "/": 
                inputOne = input.slice(0, input.indexOf("/"));
                inputTwo = input.slice((input.indexOf("/") + 1));
        
                if(inputTwo !== "") {
                    answer = operate("/", inputOne, inputTwo);
                }
                else {
                    answer = displayValue.textContent;
                }
            break inputLoop;
        }
    }
    
    if(answer !== undefined && answer !== NaN) {
        displayValue.textContent = answer;
    }
}

document.addEventListener("keydown", (event) => {
    switch(event.key) {
        case "1":
            if(displayValue.textContent.length < 18) {
                displayValue.textContent += event.key;
            }
        break;

        case "2":
            if(displayValue.textContent.length < 18) {
                displayValue.textContent += event.key;
            }
        break;

        case "3":
            if(displayValue.textContent.length < 18) {
                displayValue.textContent += event.key;
            }
        break;

        case "4":
            if(displayValue.textContent.length < 18) {
                displayValue.textContent += event.key;
            }
        break;

        case "5":
            if(displayValue.textContent.length < 18) {
                displayValue.textContent += event.key;
            }
        break;

        case "6":
            if(displayValue.textContent.length < 18) {
                displayValue.textContent += event.key;
            }
        break;

        case "7":
            if(displayValue.textContent.length < 18) {
                displayValue.textContent += event.key;
            }
        break;

        case "8":
            if(displayValue.textContent.length < 18) {
                displayValue.textContent += event.key;
            }
        break;

        case "9":
            if(displayValue.textContent.length < 18) {
                displayValue.textContent += event.key;
            }
        break;

        case "0":
            if(displayValue.textContent.length < 18) {
                displayValue.textContent += event.key;
            }
        break;
    }
});