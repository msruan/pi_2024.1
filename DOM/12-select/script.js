"use strict";
document.addEventListener("DOMContentLoaded", main);
function main() {
  handleInput();
}
function handleInput() {
  const content = document.getElementById("content");
  const input = document.getElementsByTagName("input")[0];
  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && input.value.trim() !== "") {
      if (content.disabled) {
        content.disabled = false;
      }
      input.value
        .trim()
        .split(" ")
        .forEach((word) => {
          const option = document.createElement("option");
          option.textContent = word.trim();
          content === null || content === void 0
            ? void 0
            : content.appendChild(option);
        });
      input.value = "";
    }
  });
}
