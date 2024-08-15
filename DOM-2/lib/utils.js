"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ = $;
exports.addError = addError;
function $(id) {
    return document.getElementById(id);
}
function addError(id, message, time) {
    if (time === void 0) { time = 1500; }
    var errorElement = document.createElement("div");
    var errorsArea = document.getElementById(id);
    errorsArea.appendChild(errorElement);
    errorElement.classList.add("mensagemErro");
    errorElement.textContent = message;
    setTimeout(function () {
        errorsArea.removeChild(errorElement);
    }, time);
}
