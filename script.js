// const num1 = Number(document.getElementById("val1").value);
// const num2 = Number(document.getElementById("val2").value);

const x = Number(window.prompt("Enter the first number", ""));
const y = Number(window.prompt("Enter the second number", ""));
const operator = window.prompt("Enter operator", "");

function add(x, y) {
  // const add = num1 + num2;
  const add = x + y;
  console.log(add);
  // document.getElementById("result").textContent = "Addition : " + add;        
}

function subtract(x, y) {
  // const add = num1 + num2;
  const subtract = x - y;
  console.log(subtract);
  // document.getElementById("result").textContent = "Addition : " + add;        
}

function multiply(x, y) {
  // const add = num1 + num2;
  const multiply = x * y;
  console.log(multiply);
  // document.getElementById("result").textContent = "Addition : " + add;        
}

function divide(x, y) {
  // const add = num1 + num2;
  const divide = x / y;
  console.log(divide);
  // document.getElementById("result").textContent = "Addition : " + add;        
}

function operate(x, y) {
  if (operator == "+") {
    add(x, y);
  }
  if (operator == "-") {
    subtract(x, y);
  }
  if (operator == "*") {
    multiply(x, y);
  }
  if (operator == "/") {
    divide(x, y);
  }
}

operate(x, y);