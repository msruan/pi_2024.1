document.addEventListener("DOMContentLoaded", main);

function main() {
  const content = document.getElementById("content");
  for (let i = 0; i < 5; i++) {
    content!.innerHTML +=
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa temporibus laudantium vero minima cum nostrum sequi eum minus dolores voluptatibus obcaecati atque numquam officia, quidem ad delectus, aperiam magni error.<br>";
  }
  fontSizeChanger();
}

function fontSizeChanger() {
  const plus = document.getElementById("plus") as
    | HTMLElement & HTMLInputElement;
  const less = document.getElementById("less") as
    | HTMLElement & HTMLInputElement;
  const fonts = ["8px", "12px", "16px", "20px", "24px"];
  plus?.addEventListener("click", function () {
    const content = document.getElementById("content");
    const fontSize = content?.style.fontSize;
    console.log(fontSize);
    const index = fonts.findIndex((size) => fontSize === size);
    if (!fontSize) {
      content!.style.fontSize = "20px";
    } else if (index + 1 < fonts.length) {
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
  less?.addEventListener("click", function () {
    const content = document.getElementById("content");
    const fontSize = content?.style.fontSize;
    console.log(fontSize);
    const index = fonts.findIndex((size) => fontSize === size);

    if (!fontSize) {
      content!.style.fontSize = "12px";
    } else if (index - 1 >= 0) {
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
