
export default class Calculator {

    constructor(primary, secondary, operation) {
        const FORMATTER = new Intl.NumberFormat('en', {
            maximumFractionDigits: 10,
        });
        this.formatter = FORMATTER;
        this.primaryDisplay = primary;
        this.secondaryDisplay = secondary;
        this.operationDisplay = operation;
        this.primaryDisplay.data = { value: 0 };
        this.secondaryDisplay.data = { value: 0 };
        this.reset = false;
        this.clearAll();
    }

    clearAll() {
        this.primaryDisplay.textContent = 0;
        this.secondaryDisplay.textContent = '';
        this.primaryDisplay.data.value = '0';
        this.secondaryDisplay.data.value = '0';
        this.operationDisplay.textContent = '';
    }

    delete() {
        let data = String(this.primaryDisplay.data.value).slice(0, -1);
        this.primaryDisplay.data.value = data;
        this.primaryDisplay.textContent = this.formatter.format(data);
        if (this.operationDisplay.textContent === '') {
            this.secondaryDisplay.textContent = this.primaryDisplay.textContent;
            this.secondaryDisplay.data.value = this.primaryDisplay.data.value;
        }
    }
    addDigit(digit) {
        if (this.primaryDisplay.data.value === '0' || this.reset) {
            this.primaryDisplay.textContent = '';
            this.primaryDisplay.data.value = '';
            this.reset = false;
        }

        if (digit === '.' && String(this.primaryDisplay.data.value).includes('.')) return;

        this.primaryDisplay.data.value += digit;

        const rawValue = String(this.primaryDisplay.data.value);
        const floatValue = parseFloat(rawValue);

        if (isNaN(floatValue)) {
            this.primaryDisplay.textContent = rawValue;
        } else if (rawValue.includes('.') && rawValue.endsWith('0')) {
            this.primaryDisplay.textContent = this.formatter.format(floatValue) +
                "." + rawValue.split('.')[1];
        } else if (rawValue.endsWith('.')) {
            this.primaryDisplay.textContent = this.formatter.format(floatValue) + ".";
        } else {
            this.primaryDisplay.textContent = this.formatter.format(floatValue);
        }

        if (this.operationDisplay.textContent === '') {
            this.secondaryDisplay.textContent = this.primaryDisplay.textContent;
            this.secondaryDisplay.data.value = this.primaryDisplay.data.value;
        }
    }

    operation(oeperator) {
        if (this.operationDisplay.textContent !== '' && this.primaryDisplay.data.value !== '') {
            this.equals();
        }
        if (this.primaryDisplay.data.value === '') {
            this.operationDisplay.textContent = oeperator;
            return;
        }

        this.operationDisplay.textContent = oeperator;

        this.secondaryDisplay.textContent = this.primaryDisplay.textContent;
        this.secondaryDisplay.data.value = this.primaryDisplay.data.value;

        this.primaryDisplay.textContent = '';
        this.primaryDisplay.data.value = '';

    }

    equals() {
        if (this.operationDisplay.textContent === '' || this.primaryDisplay.data.value === '') return;
        const a = parseFloat(this.secondaryDisplay.data.value);
        const b = parseFloat(this.primaryDisplay.data.value);
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
            case '÷':
                result = a / b;
                break;
        }
        this.primaryDisplay.textContent = this.formatter.format(result);
        this.primaryDisplay.data.value = result;
        this.secondaryDisplay.textContent = '';
        this.secondaryDisplay.data.value = '';
        this.operationDisplay.textContent = '';
        this.reset = true;

    }

}