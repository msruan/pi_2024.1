document.addEventListener("DOMContentLoaded", main);
function main() {
  const innerHtML = document.getElementById("innerHTML");
  const textContent = document.getElementById("textContent");
  innerHtML.innerHTML +=
    "Olha<br/>a<br/>quebra<br/>de<br/>linha.<br><footer><i>Funcionou?</i></footer>";
  textContent.textContent +=
    "Olha<br/>a<br/>quebra<br/>de<br/>linha.<br><footer><i>Funcionou?</i></footer>";
}
