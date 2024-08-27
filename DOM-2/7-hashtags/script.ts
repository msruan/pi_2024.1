document.addEventListener("DOMContentLoaded", main);
const doc = document;
const hashtags: string[] = [];
const MAX_LENGHT = 4;

function main() {
  console.log("entrei na main");
  const button = $("adicionarBtn");
  const input = $("hashtagInput") as HTMLInputElement;
  const select = $("hashtagsPopulares") as HTMLSelectElement;
  button?.addEventListener("click", addHashtag);
  input?.addEventListener(
    "keydown",
    (e) => e.key === "Enter" && button?.click()
  );
  select.addEventListener("change", changeTitle);
}

function changeTitle() {
  const title = $("title")!;
  const select = $("hashtagsPopulares") as HTMLSelectElement;
  title.textContent = "#" + select.value;
}

function addHashtag() {
  const input = $("hashtagInput") as HTMLInputElement;
  const select = $("hashtagsPopulares") as HTMLSelectElement;
  const value = purgeChar(clearStr(input.value ?? "") ?? "", "#");

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
function clearStr(str: string) {
  return purgeChar(str.trim(), " ");
}
function purgeChar(str: string, char: string) {
  let filteredStr = "";
  for (let letter of str) {
    if (letter !== char) filteredStr += letter;
  }
  return filteredStr;
}

function $(id: string) {
  return document.getElementById(id);
}

function addError(message: string, id: string = "", time: number = 1500) {
  var errorElement = document.createElement("div");
  const errorsArea = id === "" ? document.body : document.getElementById(id);
  errorsArea!.appendChild(errorElement);
  errorElement.classList.add("mensagemErro");
  errorElement.textContent = message;
  setTimeout(function () {
    errorsArea!.removeChild(errorElement);
  }, time);
}
