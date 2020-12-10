const buttons = document.querySelectorAll("button");
const displayValue = document.querySelector("#displayValue");

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

    return a / b;
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if(button.textContent === "clear") {
            displayValue.textContent = "";
        }
        else if(button.textContent === "=") {
            parseInput(displayValue.textContent);
        }
        else if(button.textContent === "+" || button.textContent === "-" || 
                    button.textContent === "x" || button.textContent === "/") {
            
            if( displayValue.textContent.indexOf("+") === -1 && 
                displayValue.textContent.indexOf("-") === -1 && 
                displayValue.textContent.indexOf("x") === -1 && 
                displayValue.textContent.indexOf("/") === -1) {
                
                    displayValue.textContent += button.textContent;  
            }
            else {
                parseInput(displayValue.textContent);
            }
        }
        else {
            displayValue.textContent += button.textContent;
        }
    });
});

function parseInput(input) {
    let answer = 0;
    let inputOne = "";

    for(let i = 0; i < input.length; i++) {
        switch(input[i]) {
            case "+": 
                inputOne = input.slice(0, input.indexOf("+"));
                inputTwo = input.slice((input.indexOf("+") + 1));
                
                answer = operate("+", inputOne, inputTwo);
            break;

            case "-": 
                inputOne = input.slice(0, input.indexOf("-"));
                inputTwo = input.slice((input.indexOf("-") + 1));
            
                answer = operate("-", inputOne, inputTwo);
            break;

            case "x": 
                inputOne = input.slice(0, input.indexOf("x"));
                inputTwo = input.slice((input.indexOf("x") + 1));
        
                answer = operate("*", inputOne, inputTwo);
            break;

            case "/": 
                inputOne = input.slice(0, input.indexOf("/"));
                inputTwo = input.slice((input.indexOf("/") + 1));
        
                answer = operate("/", inputOne, inputTwo);
            break;
        }
    }

    console.log(answer);
}