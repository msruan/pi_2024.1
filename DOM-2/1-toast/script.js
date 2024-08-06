document.addEventListener("DOMContentLoaded", main);

function main() {
  var messageInput = document.getElementById("putMessage");
  var botao = document.getElementById("botaoErro");

  messageInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      botao.click();
    }
  });

  botao.addEventListener("click", function () {
    addError("errorsArea", messageInput.value, 1000);
  });
}

function addError(id, message, time) {
  var errorElement = document.createElement("div");
  var errorsArea = document.getElementById(id);
  errorsArea.appendChild(errorElement);
  errorElement.classList.add("mensagemErro");
  errorElement.textContent = message;
  setTimeout(function () {
    errorsArea.removeChild(errorElement);
  }, time);
}
