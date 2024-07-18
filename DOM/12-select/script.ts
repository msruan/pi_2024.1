document.addEventListener("DOMContentLoaded", main);
function main() {
  handleInput();
}

function handleInput() {
  const content = document.getElementById("content");

  const input = document.getElementsByTagName("input")[0];
  input.addEventListener("keydown", function (e) {
    console.log("chamei");
    if (e.key === "Enter" && input.value.trim() !== "") {
      input.value
        .trim()
        .split(" ")
        .forEach((word) => {
          const option = document.createElement("option");
          option.textContent = word.trim();
          content?.appendChild(option);
        });
      input.value = "";
    }
  });
}
