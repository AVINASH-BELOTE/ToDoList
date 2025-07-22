let currentInput = '0';
let previousInput = '';
let operation = null;
let shouldResetScreen = false;

const display = document.getElementById('display');
const history = document.getElementById('history');

function updateDisplay() {
  display.textContent = currentInput;
  history.textContent = previousInput + (operation || '');
}

function appendNumber(num) {
  if (display.textContent === '0' || shouldResetScreen) {
    currentInput = num;
    shouldResetScreen = false;
  } else {
    currentInput += num;
  }
  updateDisplay();
}

function appendDot() {
  if (shouldResetScreen) {
    currentInput = '0';
    shouldResetScreen = false;
  }
  if (!currentInput.includes('.')) {
    currentInput += '.';
    updateDisplay();
  }
}

function clearAll() {
  currentInput = '0';
  previousInput = '';
  operation = null;
  updateDisplay();
}

function toggleSign() {
  currentInput = (parseFloat(currentInput) * -1).toString();
  updateDisplay();
}

function percent() {
  currentInput = (parseFloat(currentInput) / 100).toString();
  updateDisplay();
}

function setOperation(op) {
  if (operation !== null) calculate();
  previousInput = currentInput;
  operation = op;
  shouldResetScreen = true;
  updateDisplay();
}

function calculate() {
  if (operation === null || shouldResetScreen) return;

  const prev = parseFloat(previousInput);
  const curr = parseFloat(currentInput);
  let result;

  switch (operation) {
    case '+':
      result = prev + curr;
      break;
    case '−':
      result = prev - curr;
      break;
    case '×':
      result = prev * curr;
      break;
    case '÷':
      result = curr === 0 ? 'Error' : prev / curr;
      break;
    default:
      return;
  }

  currentInput = result.toString().slice(0, 10);
  operation = null;
  previousInput = '';
  shouldResetScreen = true;
  updateDisplay();
}
