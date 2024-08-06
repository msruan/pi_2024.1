document.addEventListener("DOMContentLoaded", main);
/*
a) Retire os espaços usando a função trim() das strings e faça um if testando se a
string resultante é nula/vazia;
*/
const isBlank = (message) => !message || message.trim() === "";

function validate(message) {
  if (isBlank(message)) {
    addError("errorsArea", "Puts, string vazia :/", 3000);
    return false;
  }
  return true;
}

function main() {
  var messageInput = document.getElementById("putMessage");
  var botao = document.getElementById("botaoExibir");

  messageInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      botao.click();
      messageInput.value = "";
    }
  });

  botao.addEventListener("click", function () {
    if (validate(messageInput.value)) {
      addText(messageInput.value);
    }
  });
}

function addText(text) {
  var content = document.getElementById("conteudo");
  var textDiv = document.createElement("div");
  textDiv.classList.add("message");
  textDiv.textContent = text;
  content.appendChild(textDiv);
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
