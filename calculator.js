export class Calculator {
  constructor(display) {
    this.display = display;
    this.clear();
  }

  stepBack() {
      this.input = this.storedDisplay;
      this.updateDisplay();
      this.calculated = false;
      this.newExpr = false;
    
  }

  back() {
    if (this.newExpr && this.input.length == 1) {
      this.stepBack();
    } else {
      this.input = this.input.slice(0, -1);
      this.updateDisplay();
    
    }
  }

  clear() {
    this.input = "";
    this.operator = "";
    this.result = "";
    this.updateDisplay();
  }

  updateDisplay() {
    this.display.value = this.input;
  }

  addToInput(value) {
    if (this.calculated) {
      this.input = value;
      this.newExpr = true;
      this.calculated = false;
      this.updateDisplay();
    } else {
      this.input += value;
      this.updateDisplay();
    }
  }

  addOperator(value) {
    if (this.calculated) {
      this.calculated = false;
    }
    this.operator = value;
    this.addToInput(this.operator);
  }

  operate(operator, a, b) {
    switch (operator) {
      case "+":
        return this.add(a, b);
      case "-":
        return this.subtract(a, b);
      case "*":
        return this.multiply(a, b);
      case "/":
        return this.divide(a, b);
      default:
        throw new Error("Invalid operator");
    }
  }

  // calculateLongExpression() {
  //   let expression = this.input.split(/\d/);
  //   let operators = [];
  //   let values = this.input.split(/[-+*/]/);
  //   let result = parseFloat(values[0]);
  //   for (let op in expression) {
  //     if (expression[op]) {
  //       operators.push(expression[op]);
  //     }
  //   }
  //   if (operators.length > 1) {
  //     this.operator = operators[0];
  //     this.calculate();
  //   }
  // }

  // calculate() {
  //   let values = this.input.split(/[-+*/]/);
  //   let result = parseFloat(values[0]);

  //   for (let i = 0; i < this.operator.length; i++) {
  //     let op = this.operator[i];
  //     let a = parseFloat(values[i]);
  //     let b = parseFloat(values[i + 1]);
  //     result = this.operate(op, result, b);
  //   }

  //   this.result = result;
  //   this.input = this.result.toString();
  //   this.operator = "";
  //   this.updateDisplay();
  // }
  calculate() {
    let values = this.input.split(/[-+*/]/);
    let result = parseFloat(values[0]);
    const negativeOp = this.input[0]
    if (negativeOp == "-") {
      this.calculateNegative();
    } else {
      for (let i = 0, j = 1; i < this.input.length; i++) {
        if ("+-*/".includes(this.input[i])) {
          let op = this.input[i];
          let a = result;
          let b = parseFloat(values[j]);
          result = this.operate(op, a, b);
          j++;
        }
      }
      this.result = parseFloat(result.toFixed(15));
      this.input = this.result.toString();
      this.operator = "";
      this.calculated = true;
      this.storedDisplay = this.input;
      this.updateDisplay();
    }
   
  }

  calculateNegative() {
    let values = this.input.split(/[-+*/]/);
    values.shift();
    let nOperator = this.input.split(/\d/).join("")
    let op = nOperator[1];
    let a = 0 - parseFloat(values[0]);
    let b = parseFloat(values[1])
    console.log(op, a, b)
    let result = this.operate(op, a, b);
    this.result = parseFloat(result.toFixed(15));
    this.input = this.result.toString();
    this.operator = "";
    this.calculated = true;
    this.storedDisplay = this.input;
    this.updateDisplay();
  }

  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero");
    } else {
      return a / b;
    }
  }
}
