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
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
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
        else {
            displayValue.textContent += button.textContent;
        }
    });
});

function parseInput(input) {
    let answer = 0;
    let numberCount = 1;

    for(let i = 0; i < input.length; i++) {
        if(input[i] === "+" || input[i] === "-" || input[i] === "x" || input[i] === "/") {
            numberCount++
        }        
    }

    for(let j = 0; j < numberCount; j++) {
        switch(input[i]) {
            case "+": 
                answer += operate("+", input[i-1], input[i+1]);
                
            break;

            case "-": 
                answer += operate("-", input[i-1], input[i+1]);
                
            break;

            case "x": 
                answer += operate("*", input[i-1], input[i+1]);
                
            break;

            case "/": 
                answer += operate("/", input[i-1], input[i+1]);
                
            break;
    }

    console.log(numberCount);
}