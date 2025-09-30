// Function for addition
function add(number1, number2) {
    return number1 + number2;
}

// Function for subtraction
function subtract(number1, number2) {
    return number1 - number2;
}

// Function for multiplication
function multiply(number1, number2) {
    return number1 * number2;
}

// Function for division
function divide(number1, number2) {
    if (number2 === 0) {
        return 'Error: Cannot divide by zero'; // Handle division by zero
    }
    return number1 / number2;
}

// Helper function to get numbers and display result
function performCalculation(operationFn) {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = operationFn(number1, number2);
    document.getElementById('calculation-result').textContent = result;
}

// Attach Event Listeners
document.getElementById('add').addEventListener('click', function() {
    performCalculation(add);
});

document.getElementById('subtract').addEventListener('click', function() {
    performCalculation(subtract);
});

document.getElementById('multiply').addEventListener('click', function() {
    performCalculation(multiply);
});

document.getElementById('divide').addEventListener('click', function() {
    performCalculation(divide);
});
