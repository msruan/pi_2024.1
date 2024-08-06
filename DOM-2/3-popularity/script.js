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
  var botao = document.getElementById("botaoCalcular");
  document.body.addEventListener("keydown", function (e) {
    if (e.key === "Enter") botao.click();
  });
  botao.addEventListener("click", function () {
    addEngagement();
  });
}
const calcEngagement = (interactions, views) => (interactions / views) * 100;

function addEngagement() {
  var content = document.getElementById("result");
  var interactionInput = document.getElementById("interactionInput");
  var viewInput = document.getElementById("viewInput");
  const interactions = Number(interactionInput.value);
  const views = Number(viewInput.value);

  const result = calcEngagement(interactions, views);

  if (isNaN(result) || !isFinite(result)) {
    console.log(interactions);
    addError("errorsArea", "Please, insira um número", 1000);
    return;
  }

  content.textContent = result;
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
