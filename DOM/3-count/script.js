document.addEventListener("DOMContentLoaded", main);
function main() {
    handleInput();
}
function getCount() {
    var display = document.getElementById("display");
    var content = document.getElementById("content");
    var pars = content.getElementsByTagName("p");
    display.textContent = "".concat(pars.length, " p\u00E1ragrafos");
}
function handleInput() {
    var content = document.getElementById("content");
    var input = document.getElementsByTagName("input")[0];
    input.addEventListener("keydown", function (e) {
        if (e.key === "Enter" && input.value.trim() !== "") {
            var p = document.createElement("p");
            p.textContent = input.value.trim();
            input.value = "";
            content === null || content === void 0 ? void 0 : content.appendChild(p);
            getCount();
        }
    });
}
