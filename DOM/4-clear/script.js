document.addEventListener("DOMContentLoaded", main);
function main() {
    alterText();
    clearText();
}
function alterText() {
    // selecione o botão usando o método getElementById
    var botao = document.getElementById("botao");
    // adicione um evento de clique ao botão
    botao === null || botao === void 0 ? void 0 : botao.addEventListener("click", function () {
        // selecione o parágrafo usando o método getElementById
        var paragrafo = document.getElementById("paragrafo");
        // altere o texto do parágrafo
        paragrafo.textContent = "O texto deste parágrafo foi alterado!";
    });
}
function clearText() {
    var button = document.getElementById("clear-btn");
    var par = document.getElementById("paragrafo");
    button === null || button === void 0 ? void 0 : button.addEventListener("click", function () { return (par.textContent = ""); });
}
