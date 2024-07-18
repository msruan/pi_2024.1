"use strict";
document.addEventListener("DOMContentLoaded", main);
var Operation;
(function (Operation) {
    Operation[Operation["FirstNumber"] = 0] = "FirstNumber";
    Operation[Operation["Operator"] = 1] = "Operator";
    Operation[Operation["SecondNumber"] = 2] = "SecondNumber";
})(Operation || (Operation = {}));
function $(id) {
    return document.getElementById(id);
}
function main() {
    const operation = ["", ""];
    handleKeydown(operation);
    createOperators(operation);
    appendRadios();
    createNumbers(operation);
}
function handleOperatorClick(id, operation) {
    var _a, _b, _c, _d, _e;
    const operator = $(id);
    const operators = (_a = $("operators")) === null || _a === void 0 ? void 0 : _a.getElementsByClassName("operator");
    const preview = $("preview");
    const actual = $("actual");
    if (operation[Operation.FirstNumber] === "") {
        return;
    }
    const selected = Array.from(operators !== null && operators !== void 0 ? operators : []).find((item) => {
        const radio = item === null || item === void 0 ? void 0 : item.getElementsByTagName("input")[0];
        return radio === null || radio === void 0 ? void 0 : radio.checked;
    });
    if (selected !== undefined) {
        if (strIsEmpty(preview === null || preview === void 0 ? void 0 : preview.textContent)) {
            selected.getElementsByTagName("input")[0].checked = false;
            operator.getElementsByTagName("input")[0].checked = true;
            actual.textContent = (_b = preview === null || preview === void 0 ? void 0 : preview.textContent) !== null && _b !== void 0 ? _b : "";
            preview.textContent = "";
        }
        else {
            console.log("Primeiro número: ", parseFloat(operation[Operation.FirstNumber]));
            console.log("Segundo número: ", operation[Operation.SecondNumber]);
            console.log("Operador: ", (_c = selected === null || selected === void 0 ? void 0 : selected.textContent) !== null && _c !== void 0 ? _c : "");
            preview.textContent = String(calculate(parseFloat(operation[Operation.FirstNumber]), parseFloat(operation[Operation.SecondNumber]), (_d = selected === null || selected === void 0 ? void 0 : selected.textContent) !== null && _d !== void 0 ? _d : ""));
        }
    }
    else {
        operator.getElementsByTagName("input")[0].checked = true;
        operation[Operation.Operator] = (_e = operator === null || operator === void 0 ? void 0 : operator.textContent) !== null && _e !== void 0 ? _e : "";
        preview.textContent = "";
    }
    const radio = operator === null || operator === void 0 ? void 0 : operator.getElementsByTagName("input")[0];
    radio.checked = true;
}
function strIsEmpty(str) {
    return str === undefined || str === null || str === "";
}
function createOperators(operation) {
    const operators = $("operators");
    "+ - * /".split(" ").forEach(function (signal, index) {
        const operator = document.createElement("div");
        operator.innerHTML = signal;
        const className = "operator";
        const id = className + index;
        operator.className = className;
        operator.id = id;
        operator.addEventListener("click", () => handleOperatorClick(id, operation));
        operators === null || operators === void 0 ? void 0 : operators.appendChild(operator);
    });
}
function calculate(num1, num2, operation) {
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
    Array.from(document.getElementsByClassName("operator")).forEach((operator) => {
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "operator";
        radio.style.appearance = "none";
        operator.appendChild(radio);
    });
}
function createNumbers(operation) {
    const preview = $("preview");
    const numbers = $("numbers");
    for (let i = 1; i < 12; i++) {
        const number = document.createElement("div");
        number.className = "number";
        let content = `${i}`;
        if (i === 10) {
            content = "0";
            number.id = "zero";
        }
        else if (i === 11) {
            content = "=";
        }
        number.innerHTML = content;
        number.addEventListener("click", function () {
            var _a, _b;
            preview.textContent += content;
            if (operation[Operation.Operator] === "") {
                operation[Operation.FirstNumber] = (_a = preview === null || preview === void 0 ? void 0 : preview.textContent) !== null && _a !== void 0 ? _a : content;
            }
            else {
                operation[Operation.SecondNumber] = (_b = preview === null || preview === void 0 ? void 0 : preview.textContent) !== null && _b !== void 0 ? _b : content;
            }
        });
        numbers === null || numbers === void 0 ? void 0 : numbers.appendChild(number);
    }
}
function handleKeydown(operation) {
    const preview = $("preview");
    document.addEventListener("keydown", function (e) {
        var _a;
        if (e.key === "Backspace") {
            const oldpreview = preview === null || preview === void 0 ? void 0 : preview.innerHTML;
            preview.innerHTML = oldpreview.slice(0, oldpreview.length - 1);
        }
        else if (e.key === "Enter") {
            console.log("mano, o zero tem esse tanto de filhos: ", (_a = $("zero")) === null || _a === void 0 ? void 0 : _a.children);
            if (operation[Operation.FirstNumber].length === 0 &&
                (preview === null || preview === void 0 ? void 0 : preview.innerHTML.trim()) !== "") {
                operation.push(preview.innerHTML.trim());
                preview.innerHTML = "";
            }
            else {
                console.log("mana, tinha um valor dentro");
            }
        }
        else {
            const numbersKeys = Array.from(Array(10).keys()).map((i) => String(i));
            if (numbersKeys.includes(e.key)) {
                preview.innerHTML += e.key;
            }
        }
    });
}
