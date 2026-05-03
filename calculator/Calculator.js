
export default class Calculator {
    constructor(primary, secondary, operation) {
        this.primaryDisplay = primary;
        this.secondaryDisplay = secondary;
        this.operationDisplay = operation;
        this.reset = false;
        this.clearAll();
    }

    clearAll() {
        this.primaryDisplay.textContent = 0;
        this.secondaryDisplay.textContent = '';
        this.operationDisplay.textContent = '';
    }

    delete() {
        let data = this.primaryDisplay.textContent.split('');
        this.primaryDisplay.textContent = data;

    }

    addDigit(digit) {
        if (this.primaryDisplay.textContent === '0' || this.reset) {
            this.primaryDisplay.textContent = '';
            this.reset = false;
        }
        this.primaryDisplay.textContent += digit;

        if (this.operationDisplay.textContent === '') {
            this.secondaryDisplay.textContent = this.primaryDisplay.textContent;
        }

    } 

    operation(oeperator) {
        this.operationDisplay.textContent = oeperator;
        this.secondaryDisplay.textContent = this.primaryDisplay.textContent;
        this.primaryDisplay.textContent = '';

    }

    equals() {
        const a = parseFloat(this.secondaryDisplay.textContent);
        const b = parseFloat(this.primaryDisplay.textContent);
        const operator = this.operationDisplay.textContent;
        let result;
        switch (operator) {
            case '+':
                result = a + b;
                break;
            case '-':
                result = a - b;
                break;
            case '*':
                result = a * b;
                break;
            case '/':
                result = a / b;
                break;
        }
        this.primaryDisplay.textContent = result;
        this.secondaryDisplay.textContent = '';
        this.operationDisplay.textContent = '';
        this.reset = true;

    }

}