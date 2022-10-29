let currNum = "",
prevNum = "",
operator = undefined;

const finalResult = document.querySelector(".center");
const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");
const operatorBtn = document.querySelectorAll(".operator");
const numberBtn = document.querySelectorAll(".number");
const equalsBtn = document.querySelector(".equal");

function add(x, y) {
  return x + y;       
}

function subtract(x, y) {
  return x - y;       
}

function multiply(x, y) {
  return x * y;     
}

function divide(x, y) {
  if (y === 0) {
    return "Can't divide by zero";
  }
  return x / y;      
}

function operate(x, op, y) {
  let result;
  const num1 = parseFloat(x);
  const num2 = parseFloat(y);
  if (op === undefined) {
    return;
  }
  if (op == "+") {
    result = add(num1, num2);
  }
  if (op == "-") {
    result = subtract(num1, num2);
  }
  if (op == "x") {
    result = multiply(num1, num2);
  }
  if (op == "/") {
    result = divide(num1, num2);
  }

  currNum = result.toFixed(4);
  prevNum  = "";
  operator = undefined;
}

function inputNumber(number) {
  if ((number === "." && currNum.includes(".")) || (number === "0" && currNum.includes("0")))
    return;
    currNum = currNum.toString() + number.toString();
}

function inputOperator(op) {
  if (operator !== undefined) {
    operator = op;
  }
  if (currNum === "") return;
  if (prevNum !== "") {
    operate(currNum, op, prevNum);
  }
  operator = op;
  prevNum = currNum;
  currNum = "";
}

function clear() {
  currNum = "";
  prevNum = "";
  operator = undefined;
}

function deletion() {
  currNum = currNum.toString().slice(0, -1);
}

function updateScreen() {
  finalResult.innerText = currNum;
  if (operator != undefined) {
    finalResult.innerText = `${prevNum} ${operator} ${currNum}`;
  }
}

numberBtn.forEach(button => {
  button.addEventListener('click', () => {
    inputNumber(button.innerText);
    updateScreen();
  })
});

operatorBtn.forEach(button => {
  button.addEventListener('click', () => {
    inputOperator(button.innerText);
    updateScreen();
  })
});

equalsBtn.addEventListener("click", () => {
  operate(prevNum, operator, currNum);
  updateScreen();
});

clearBtn.addEventListener("click", () => {
  clear();
  updateScreen();
});

deleteBtn.addEventListener("click", () => {
  deletion();
  updateScreen();
});
