"use strict";
document.addEventListener("DOMContentLoaded", main);
function main() {
    handleInput();
}
function handleInput() {
    const content = document.getElementById("content");
    const input = document.getElementsByTagName("input")[0];
    input.addEventListener("keydown", function (e) {
        console.log("chamei");
        if (e.key === "Enter" && input.value.trim() !== "") {
            input.value
                .trim()
                .split(" ")
                .forEach((word) => {
                const li = document.createElement("li");
                li.textContent = word.trim();
                content === null || content === void 0 ? void 0 : content.appendChild(li);
            });
            input.value = "";
        }
    });
}
