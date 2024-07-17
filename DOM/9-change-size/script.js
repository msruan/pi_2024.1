document.addEventListener("DOMContentLoaded", main);
function main() {
    var content = document.getElementById("content");
    for (var i = 0; i < 5; i++) {
        content.innerHTML +=
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa temporibus laudantium vero minima cum nostrum sequi eum minus dolores voluptatibus obcaecati atque numquam officia, quidem ad delectus, aperiam magni error.<br>";
    }
    fontSizeChanger();
}
function fontSizeChanger() {
    var plus = document.getElementById("plus");
    var less = document.getElementById("less");
    var fonts = ["8px", "12px", "16px", "20px", "24px"];
    plus === null || plus === void 0 ? void 0 : plus.addEventListener("click", function () {
        var content = document.getElementById("content");
        var fontSize = content === null || content === void 0 ? void 0 : content.style.fontSize;
        console.log(fontSize);
        var index = fonts.findIndex(function (size) { return fontSize === size; });
        if (!fontSize) {
            content.style.fontSize = "20px";
        }
        else if (index + 1 < fonts.length) {
            content.style.fontSize = fonts[index + 1];
            if (index + 1 === fonts.length - 1) {
                plus.disabled = true;
                plus.style.cursor = "not-allowed";
            }
        }
        if (less.disabled) {
            less.disabled = false;
            less.style.cursor = "pointer";
        }
    });
    less === null || less === void 0 ? void 0 : less.addEventListener("click", function () {
        var content = document.getElementById("content");
        var fontSize = content === null || content === void 0 ? void 0 : content.style.fontSize;
        console.log(fontSize);
        var index = fonts.findIndex(function (size) { return fontSize === size; });
        if (!fontSize) {
            content.style.fontSize = "12px";
        }
        else if (index - 1 >= 0) {
            content.style.fontSize = fonts[index - 1];
            if (index - 1 === 0) {
                less.disabled = true;
                less.style.cursor = "not-allowed";
            }
        }
        if (plus.disabled) {
            plus.disabled = false;
            plus.style.cursor = "pointer";
        }
    });
}
