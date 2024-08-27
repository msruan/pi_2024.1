"use strict";
document.addEventListener("DOMContentLoaded", main);
const doc = document;
const hashtags = [];
const MAX_LENGHT = 4;
function main() {
    console.log("entrei na main");
    const button = $("adicionarBtn");
    const input = $("hashtagInput");
    const select = $("hashtagsPopulares");
    button === null || button === void 0 ? void 0 : button.addEventListener("click", addHashtag);
    input === null || input === void 0 ? void 0 : input.addEventListener("keydown", (e) => e.key === "Enter" && (button === null || button === void 0 ? void 0 : button.click()));
    select.addEventListener("change", changeTitle);
}
function changeTitle() {
    const title = $("title");
    const select = $("hashtagsPopulares");
    title.textContent = "#" + select.value;
}
function addHashtag() {
    var _a, _b;
    const input = $("hashtagInput");
    const select = $("hashtagsPopulares");
    const value = purgeChar((_b = clearStr((_a = input.value) !== null && _a !== void 0 ? _a : "")) !== null && _b !== void 0 ? _b : "", "#");
    if (value.length > 0 && !hashtags.includes(value)) {
        if (hashtags.length > MAX_LENGHT || value.length <= 2) {
            return;
        }
        const hashtag = doc.createElement("option");
        hashtag.value = value;
        hashtag.textContent = "#" + value;
        select.appendChild(hashtag);
        hashtags.push(value);
        select.size = hashtags.length;
        if (hashtags.length === 1) {
            changeTitle();
        }
    }
}
/* -------------------------------------------------------------------------- */
/*                                    UTILS                                   */
/* -------------------------------------------------------------------------- */
function clearStr(str) {
    return purgeChar(str.trim(), " ");
}
function purgeChar(str, char) {
    let filteredStr = "";
    for (let letter of str) {
        if (letter !== char)
            filteredStr += letter;
    }
    return filteredStr;
}
function $(id) {
    return document.getElementById(id);
}
function addError(message, id = "", time = 1500) {
    var errorElement = document.createElement("div");
    const errorsArea = id === "" ? document.body : document.getElementById(id);
    errorsArea.appendChild(errorElement);
    errorElement.classList.add("mensagemErro");
    errorElement.textContent = message;
    setTimeout(function () {
        errorsArea.removeChild(errorElement);
    }, time);
}
