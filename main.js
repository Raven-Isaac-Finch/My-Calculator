let currentNumber = document.querySelector('.current-number');
let previousNumber = document.querySelector('.previous-number');
let result = 0;

const calculator = document.querySelector('.calculator');


calculator.addEventListener('click', function(e) {
    if(e.target.classList.contains("operation")) {
        operationCheck(e.target.textContent);
    } else if(e.target.classList.contains("equals")) {
        compute();
    } else if(e.target.classList.contains("all-clear")) {
        allClear();
    } else if(e.target.classList.contains("delete")) {
        del();
    } else if(e.target.classList.contains("square")) {
        square();
    } else {
        currentNumber.textContent += e.target.textContent;
    }
});

function operationCheck(operation) {
    compute();
    previousNumber.textContent = currentNumber.textContent;
    currentNumber.textContent = '';
};

function compute() {
    switch(operation) {
        case "/":
            result = parseInt(previousNumber.textContent) / parseInt(currentNumber.textContent);
            break;
        case "*":
            result = parseInt(previousNumber.textContent) * parseInt(currentNumber.textContent);
            break;
        case "-":
            result = parseInt(previousNumber.textContent) - parseInt(currentNumber.textContent);
            break;
        case "+":
            result = parseInt(previousNumber.textContent) + parseInt(currentNumber.textContent);
            break;
    };
    currentNumber = result;
    previousNumber = '';
};

function allClear() {
    previousNumber.textContent = '';
    currentNumber.textContent = '';
};

function del() {
    currentNumber.textContent = currentNumber.textContent.slice(0, -1);
};

function square() {
    result = currentNumber.textContent * currentNumber.textContent;

    currentNumber.textContent = result;
};
