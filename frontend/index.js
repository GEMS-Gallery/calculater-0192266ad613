document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const keys = document.querySelectorAll('.key');
    let currentInput = '';
    let operator = '';
    let firstOperand = null;

    keys.forEach(key => {
        key.addEventListener('click', () => {
            const value = key.getAttribute('data-value');

            if (key.id === 'clear') {
                currentInput = '';
                operator = '';
                firstOperand = null;
                display.value = '';
            } else if (key.id === 'equals') {
                if (firstOperand !== null && operator && currentInput) {
                    const secondOperand = parseFloat(currentInput);
                    let result;
                    switch (operator) {
                        case '+':
                            result = firstOperand + secondOperand;
                            break;
                        case '-':
                            result = firstOperand - secondOperand;
                            break;
                        case '*':
                            result = firstOperand * secondOperand;
                            break;
                        case '/':
                            result = firstOperand / secondOperand;
                            break;
                    }
                    display.value = result;
                    currentInput = result.toString();
                    firstOperand = null;
                    operator = '';
                }
            } else if (key.classList.contains('operator')) {
                if (currentInput) {
                    firstOperand = parseFloat(currentInput);
                    operator = value;
                    currentInput = '';
                }
            } else {
                currentInput += value;
                display.value = currentInput;
            }
        });
    });
});
