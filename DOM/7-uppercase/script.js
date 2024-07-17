document.addEventListener("DOMContentLoaded", main);
function main() {
  var lower = document.getElementById("lower");
  var upper = document.getElementById("upper");
  var swapBtn = document.getElementById("swap");
  var handleUp = function () {
    return (upper.value = lower.value.toLocaleUpperCase());
  };
  var handleLow = function () {
    return (lower.value = upper.value.toLocaleLowerCase());
  };
  lower === null || lower === void 0
    ? void 0
    : lower.addEventListener("input", handleUp);
  swapBtn === null || swapBtn === void 0
    ? void 0
    : swapBtn.addEventListener("click", function () {
        if (upper.disabled) {
          lower.disabled = true;
          lower.style.cursor = "not-allowed";
          lower.removeEventListener("input", handleUp);
          upper.disabled = false;
          upper.style.cursor = "text";

          upper === null || upper === void 0
            ? void 0
            : upper.addEventListener("input", handleLow);
        } else {
          lower.disabled = false;
          lower.style.cursor = "text";
          lower.addEventListener("input", handleUp);
          upper.disabled = true;
          upper.style.cursor = "not-allowed";
          upper === null || upper === void 0
            ? void 0
            : upper.removeEventListener("input", handleLow);
        }
      });
}
