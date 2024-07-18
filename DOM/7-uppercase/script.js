"use strict";
document.addEventListener("DOMContentLoaded", main);
function main() {
    const lower = document.getElementById("lower");
    const upper = document.getElementById("upper");
    const swapBtn = document.getElementById("swap");
    const handleUp = () => (upper.value = lower.value.toLocaleUpperCase());
    const handleLow = () => (lower.value = upper.value.toLocaleLowerCase());
    lower === null || lower === void 0 ? void 0 : lower.addEventListener("input", handleUp);
    swapBtn === null || swapBtn === void 0 ? void 0 : swapBtn.addEventListener("click", function () {
        if (upper.disabled) {
            lower.disabled = true;
            lower.style.cursor = "not-allowed";
            lower.removeEventListener("input", handleUp);
            upper.disabled = false;
            upper === null || upper === void 0 ? void 0 : upper.addEventListener("input", handleLow);
        }
        else {
            lower.disabled = false;
            lower.addEventListener("input", handleUp);
            upper.disabled = true;
            upper.style.cursor = "not-allowed";
            upper === null || upper === void 0 ? void 0 : upper.removeEventListener("input", handleLow);
        }
    });
}
