document.addEventListener("DOMContentLoaded", main);

function main() {
  const title = document.getElementById("title");
  title!.addEventListener("click", () => {
    title!.innerHTML = "Ely";
    const color = title?.style.color;
    title!.style.color = "red";
  });
  const lastNumber: number[] = [];
  const currentOperator: string[] = [];
  handleKeydown(lastNumber, currentOperator);
  createOperators(lastNumber, currentOperator);
  appendRadios();
  createNumbers();
}

function createOperators(lastNumber: number[], currentOperator: string[]) {
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
    });
    operators?.appendChild(operator);
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
      view!.innerHTML += content;
    });
    numbers?.appendChild(number);
  }
}

function handleKeydown(lastNumber: number[], currentOperator: string[]) {
  const view = document.getElementById("view");

  document.addEventListener("keydown", function (e) {
    if (e.key === "Backspace") {
      const oldView = view?.innerHTML;
      view!.innerHTML = oldView!.slice(0, oldView!.length - 1);
    } else if (e.key === "Enter") {
      console.log(
        "mano, o zero tem esse tanto de filhos: ",
        document.getElementById("zero")?.children
      );
      if (lastNumber.length === 0) {
        lastNumber.push(parseFloat(view!.innerHTML));
        view!.innerHTML = "";
      } else {
        console.log("mana, tinha um valor dentro");
      }
    } else {
      const numbersKeys = Array.from(Array(10).keys()).map((i) => String(i));
      if (numbersKeys.includes(e.key)) {
        view!.innerHTML += e.key;
      }
    }
  });
}
