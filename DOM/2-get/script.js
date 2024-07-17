// 2) Crie dois exemplos usando os métodos do objeto document:
// a. getElementById();
// b. getElementsByTagName();
document.addEventListener("DOMContentLoaded", main);
function main() {
  var subtitle = document.getElementById("subtitle");
  subtitle === null || subtitle === void 0
    ? void 0
    : subtitle.addEventListener("click", function () {
        subtitle.textContent = "Acho esse exemplo meio bobo...";
        subtitle.style.cursor = "auto";
      });
  var paragrafos = document.getElementsByTagName("p");
  var handleClick = function () {
    return subtitle === null || subtitle === void 0 ? void 0 : subtitle.click();
  };
  for (var i = 0; i < paragrafos.length; i++) {
    var par = paragrafos[i];
    par.textContent = "".concat(i + 1);
    par.style.cursor = "pointer";
    par.addEventListener("click", handleClick);
  }
}
