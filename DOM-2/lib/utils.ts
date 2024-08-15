export function $(id: string) {
  return document.getElementById(id);
}

export function addError(id: string, message: string, time: number = 1500) {
  var errorElement = document.createElement("div");
  var errorsArea = document.getElementById(id);
  errorsArea!.appendChild(errorElement);
  errorElement.classList.add("mensagemErro");
  errorElement.textContent = message;
  setTimeout(function () {
    errorsArea!.removeChild(errorElement);
  }, time);
}
