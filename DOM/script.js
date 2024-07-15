"use strict";
document.addEventListener("DOMContentLoaded", main);
function main() {
  const title = document.getElementById("title");
  title.addEventListener("click", () => {
    title.innerHTML = "Ely";
    const color =
      title === null || title === void 0 ? void 0 : title.style.color;
    title.style.color = "red";
  });
  const lastNumber = [];
  const currentOperator = [];
  handleKeydown(lastNumber, currentOperator);
  createOperators(lastNumber, currentOperator);
  appendRadios();
  createNumbers();
}
function createOperators(lastNumber, currentOperator) {
  const view = document.getElementById("view");
  const operators = document.getElementById("operators");
  "+ - * /".split(" ").forEach(function (signal) {
    const operator = document.createElement("div");
    operator.innerHTML = signal;
    operator.className = "operator";
    operator.addEventListener("click", function () {
      console.log("rpz tinha isso aqui o [", lastNumber, "]");
      currentOperator.pop();
      currentOperator.push(signal);
      document.body.style.backgroundImage = "url('./assets/plus.svg')";
    });
    operators === null || operators === void 0
      ? void 0
      : operators.appendChild(operator);
  });
}
function appendRadios() {
  Array.from(document.getElementsByClassName("operator")).forEach(
    (operator) => {
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "operator";
      operator.appendChild(radio);
    }
  );
}
function calculate() {}
function createNumbers() {
  const view = document.getElementById("view");
  const numbers = document.getElementById("numbers");
  for (let i = 1; i < 12; i++) {
    const number = document.createElement("div");
    number.className = "number";
    let content = `${i}`;
    if (i === 10) {
      content = "0";
      number.id = "zero";
    } else if (i === 11) {
      content = "=";
    }
    number.innerHTML = content;
    number.addEventListener("click", function () {
      view.innerHTML += content;
    });
    numbers === null || numbers === void 0
      ? void 0
      : numbers.appendChild(number);
  }
}
function handleKeydown(lastNumber, currentOperator) {
  const view = document.getElementById("view");
  document.addEventListener("keydown", function (e) {
    var _a;
    if (e.key === "Backspace") {
      const oldView =
        view === null || view === void 0 ? void 0 : view.innerHTML;
      view.innerHTML = oldView.slice(0, oldView.length - 1);
    } else if (e.key === "Enter") {
      console.log(
        "mano, o zero tem esse tanto de filhos: ",
        (_a = document.getElementById("zero")) === null || _a === void 0
          ? void 0
          : _a.children
      );
      if (lastNumber.length === 0) {
        lastNumber.push(parseFloat(view.innerHTML));
        view.innerHTML = "";
      } else {
        console.log("mana, tinha um valor dentro");
      }
    } else {
      const numbersKeys = Array.from(Array(10).keys()).map((i) => String(i));
      if (numbersKeys.includes(e.key)) {
        view.innerHTML += e.key;
      }
    }
  });
}
