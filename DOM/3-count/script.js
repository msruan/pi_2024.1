"use strict";
document.addEventListener("DOMContentLoaded", main);
function main() {
    handleInput();
}
function getCount() {
    const display = document.getElementById("display");
    const content = document.getElementById("content");
    const pars = content.getElementsByTagName("p");
    display.textContent = `${pars.length} páragrafos`;
}
function handleInput() {
    const content = document.getElementById("content");
    const input = document.getElementsByTagName("input")[0];
    input.addEventListener("keydown", function (e) {
        if (e.key === "Enter" && input.value.trim() !== "") {
            const p = document.createElement("p");
            p.textContent = input.value.trim();
            input.value = "";
            content === null || content === void 0 ? void 0 : content.appendChild(p);
            getCount();
        }
    });
}
