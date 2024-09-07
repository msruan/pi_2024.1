document.addEventListener("DOMContentLoaded", main);

function main() {
  const input = $("qr-input")! as HTMLInputElement;
  const button = $("qr-btn")! as HTMLButtonElement;
  button.addEventListener("click", handleClick);
  input.addEventListener("keydown", (e) => e.key === "Enter" && handleClick());
}

function handleClick() {
  console.log("cliquei");
  const input = $("qr-input")! as HTMLInputElement;
  const value = input?.value;
  if (strExists(value)) {
    input.value = "";
    generateQR(value);
  }
}

function generateQR(value: string) {
  console.log("gerei");

  const caption = $("qr-caption")!;
  const img = $("qr-code") as HTMLImageElement;
  img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`;
  caption.textContent = value;
}

/* ---------------------------------- UTILS --------------------------------- */

function strExists(value: string | null | undefined): boolean {
  return typeof value === "string" && value.trim().length > 0;
}

function $(query: string) {
  return document.getElementById(query);
}
