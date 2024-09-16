// Get the display element
const display = document.getElementById('display');

// Function to update the display
function updateDisplay(value) {
    if (display.value === '0' && value !== '.') {
        display.value = value;
    } else {
        display.value += value;
    }
}

// Function to clear the display
function clearDisplay() {
    display.value = '0';
}

// Function to calculate the result
function calculateResult() {
    try {
        const result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

// Function to handle scientific operations
function handleScientificOperation(operation) {
    switch (operation) {
        case 'sin':
            display.value = Math.sin(parseFloat(display.value));
            break;
        case 'cos':
            display.value = Math.cos(parseFloat(display.value));
            break;
        case 'tan':
            display.value = Math.tan(parseFloat(display.value));
            break;
        case 'log':
            display.value = Math.log10(parseFloat(display.value));
            break;
        case 'ln':
            display.value = Math.log(parseFloat(display.value));
            break;
        case 'sqrt':
            display.value = Math.sqrt(parseFloat(display.value));
            break;
        case '^':
            display.value += '**';
            break;
        case 'e':
            display.value = Math.E;
            break;
        case 'PI':
            display.value = Math.PI;
            break;
        default:
            break;
    }
}

// Add event listeners to the buttons
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        if (value === 'C') {
            clearDisplay();
        } else if (value === '=') {
            calculateResult();
        } else if (['sin', 'cos', 'tan', 'log', 'ln', 'sqrt', '^', 'e', 'PI'].includes(value)) {
            handleScientificOperation(value);
        } else {
            updateDisplay(value);
        }
    });
});