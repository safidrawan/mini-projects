import Calculator from "./Calculator.js";

const primaryOperand = document.querySelector("[data-primary-operand]");
const secondaryOperand = document.querySelector("[data-secondary-operand]");
const operationDisplay = document.querySelector("[data-operator]");

const calculator = new Calculator(
    primaryOperand,
    secondaryOperand,
    operationDisplay,
);

document.addEventListener("click", (e) => {
    if (e.target.matches("[data-all-clear]")) {
        calculator.clearAll();
    }
    if (e.target.matches("[data-delete]")) {
        calculator.delete();
    }
    if (e.target.matches("[data-number]")) {
        const number = e.target.textContent;
        calculator.addDigit(number);
    }
    if (e.target.matches("[data-operation]")) {
        const operator = e.target.textContent;
        calculator.operation(operator);
    }
    if (e.target.matches("[data-equals]")) {
        calculator.equals();
    }
});
