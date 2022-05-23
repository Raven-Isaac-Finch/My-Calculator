let currentNumber = document.querySelector('.current');
let previousNumber = document.querySelector('.previous');
let result = 0;
let resetToken = 'oldRegister';
let operator = '';

const calculator = document.querySelector('.calculator');


calculator.addEventListener('click', function(e) {
    if(e.target.classList.contains("operation")) {
        if(operator == '') {
            if(isNaN(parseInt(currentNumber.textContent))) return;
            operationCheck(e.target.textContent);
        } else if(operator !== '') {
            if(isNaN(parseInt(currentNumber.textContent))) return;
            compute(operator);
            previousNumber.textContent = `${currentNumber.textContent} ${e.target.textContent}`;
            currentNumber.textContent = '';
            resetToken = 'oldRegister';
        }
    operator = e.target.textContent;
    } else if(e.target.classList.contains("equals")) {
        compute(operation);
    } else if(e.target.classList.contains("all-clear")) {
        allClear();
    } else if(e.target.classList.contains("delete")) {
        del();
    } else if(e.target.classList.contains("square")) {
        square();
    } else if (e.target.classList.contains("number")) {
        if(resetToken == 'newRegister') {
            previousNumber.textContent = '';
            currentNumber.textContent = '';
            currentNumber.textContent += e.target.textContent;
            resetToken = 'oldRegister';
        } else if(resetToken == 'oldRegister') {
            if (e.target.textContent == '.' && currentNumber.textContent.includes('.')) return;
            currentNumber.textContent += e.target.textContent;
        }
    } else {
        return
    };
});

function operationCheck(operation) {
    if(currentNumber.textContent === '') return;
    if(previousNumber.textContent !== '') {
        compute(operation);
    }
    previousNumber.textContent = `${currentNumber.textContent} ${operation}`;
    currentNumber.textContent = '';
    this.operation = operation;
    resetToken = 'oldRegister';
};

function compute(operation) {
    if(isNaN(parseInt(previousNumber.textContent)) || isNaN(parseInt(currentNumber.textContent))) return;
    switch(operation) {
        case "/":
            result = parseFloat(previousNumber.textContent) / parseFloat(currentNumber.textContent);
            break;
        case "*":
            result = parseFloat(previousNumber.textContent) * parseFloat(currentNumber.textContent);
            break;
        case "-":
            result = parseFloat(previousNumber.textContent) - parseFloat(currentNumber.textContent);
            break;
        case "+":
            result = parseFloat(previousNumber.textContent) + parseFloat(currentNumber.textContent);
            break;
        default:
            return
    };
    currentNumber.textContent = result;
    previousNumber.textContent = '';
    resetToken = 'newRegister';
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
