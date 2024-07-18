document.addEventListener("DOMContentLoaded", main);
enum Operation {
  FirstNumber = 0,
  Operator = 1,
  SecondNumber = 2,
}

function $(id: string) {
  return document.getElementById(id);
}

function main() {
  const operation: string[] = ["", ""];
  handleKeydown(operation);
  createOperators(operation);
  appendRadios();
  createNumbers(operation);
}

function handleOperatorClick(id: string, operation: string[]) {
  const operator = $(id);
  const operators = $("operators")?.getElementsByClassName("operator");
  const preview = $("preview");
  const actual = $("actual");

  if (operation[Operation.FirstNumber] === "") {
    return;
  }
  const selected = Array.from(operators ?? []).find((item) => {
    const radio = item?.getElementsByTagName("input")[0];
    return radio?.checked;
  });

  if (selected !== undefined) {
    if (strIsEmpty(preview?.textContent)) {
      selected.getElementsByTagName("input")[0].checked = false;
      operator!.getElementsByTagName("input")[0].checked = true;
      actual!.textContent = preview?.textContent ?? "";
      preview!.textContent = "";
    } else {
      console.log(
        "Primeiro número: ",
        parseFloat(operation[Operation.FirstNumber])
      );
      console.log("Segundo número: ", operation[Operation.SecondNumber]);
      console.log("Operador: ", selected?.textContent ?? "");
      preview!.textContent = String(
        calculate(
          parseFloat(operation[Operation.FirstNumber]),
          parseFloat(operation[Operation.SecondNumber]),
          selected?.textContent ?? ""
        )
      );
    }
  } else {
    operator!.getElementsByTagName("input")[0].checked = true;
    operation[Operation.Operator] = operator?.textContent ?? "";
    preview!.textContent = "";
  }
  const radio = operator?.getElementsByTagName("input")[0];
  radio!.checked = true;
}

function strIsEmpty(str: string | null | undefined) {
  return str === undefined || str === null || str === "";
}

function createOperators(operation: string[]) {
  const operators = $("operators");

  "+ - * /".split(" ").forEach(function (signal, index) {
    const operator = document.createElement("div");
    operator.innerHTML = signal;

    const className = "operator";
    const id = className + index;

    operator.className = className;
    operator.id = id;

    operator.addEventListener("click", () =>
      handleOperatorClick(id, operation)
    );
    operators?.appendChild(operator);
  });
}

function calculate(
  num1: number,
  num2: number,
  operation: string
): number | undefined {
  let result;
  switch (operation) {
    case "+":
      result = num1 + num2;
      break;

    case "-":
      result = num1 - num2;
      break;

    case "*":
      result = num1 * num2;
      break;

    case "/":
      result = num1;
      break;

    default:
      throw new Error("Not supported operation '" + operation + "'");
  }
  return result;
}

function appendRadios() {
  Array.from(document.getElementsByClassName("operator")).forEach(
    (operator) => {
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "operator";
      radio.style.appearance = "none";
      operator.appendChild(radio);
    }
  );
}

function createNumbers(operation: string[]) {
  const preview = $("preview");
  const numbers = $("numbers");
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
      preview!.textContent += content;
      if (operation[Operation.Operator] === "") {
        operation[Operation.FirstNumber] = preview?.textContent ?? content;
      } else {
        operation[Operation.SecondNumber] = preview?.textContent ?? content;
      }
    });
    numbers?.appendChild(number);
  }
}

function handleKeydown(operation: string[]) {
  const preview = $("preview");

  document.addEventListener("keydown", function (e) {
    if (e.key === "Backspace") {
      const oldpreview = preview?.innerHTML;
      preview!.innerHTML = oldpreview!.slice(0, oldpreview!.length - 1);
    } else if (e.key === "Enter") {
      console.log(
        "mano, o zero tem esse tanto de filhos: ",
        $("zero")?.children
      );
      if (
        operation[Operation.FirstNumber].length === 0 &&
        preview?.innerHTML.trim() !== ""
      ) {
        operation.push(preview!.innerHTML.trim());
        preview!.innerHTML = "";
      } else {
        console.log("mana, tinha um valor dentro");
      }
    } else {
      const numbersKeys = Array.from(Array(10).keys()).map((i) => String(i));
      if (numbersKeys.includes(e.key)) {
        preview!.innerHTML += e.key;
      }
    }
  });
}
