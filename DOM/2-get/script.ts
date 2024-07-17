// 2) Crie dois exemplos usando os métodos do objeto document:
// a. getElementById();
// b. getElementsByTagName();
document.addEventListener("DOMContentLoaded", main);

function main() {
  const subtitle = document.getElementById("subtitle");
  subtitle?.addEventListener("click", () => {
    subtitle.textContent = "Acho esse exemplo meio bobo...";
    subtitle.style.cursor = "auto";
  });
  const paragrafos = document.getElementsByTagName("p");
  const handleClick = () => subtitle?.click();
  for (let i = 0; i < paragrafos.length; i++) {
    const par = paragrafos[i];
    par.textContent = `${i + 1}`;
    par.style.cursor = "pointer";
    par.addEventListener("click", handleClick);
  }
}
