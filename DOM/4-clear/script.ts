document.addEventListener("DOMContentLoaded", main);
function main() {
  alterText();
  clearText();
}
function alterText() {
  // selecione o botão usando o método getElementById
  const botao: HTMLElement | null = document.getElementById("botao");
  // adicione um evento de clique ao botão
  botao?.addEventListener("click", function () {
    // selecione o parágrafo usando o método getElementById
    const paragrafo: HTMLElement | null = document.getElementById("paragrafo");
    // altere o texto do parágrafo
    paragrafo!.textContent = "O texto deste parágrafo foi alterado!";
  });
}
function clearText() {
  const button = document.getElementById("clear-btn");
  const par = document.getElementById("paragrafo");
  button?.addEventListener("click", () => (par!.textContent = ""));
}
