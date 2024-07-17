document.addEventListener("DOMContentLoaded", main);
function main() {
  const lower: any = document.getElementById("lower");
  const upper: any = document.getElementById("upper");
  const swapBtn = document.getElementById("swap");
  const handleUp = () => (upper!.value = lower.value.toLocaleUpperCase());
  const handleLow = () => (lower!.value = upper.value.toLocaleLowerCase());
  lower?.addEventListener("input", handleUp);
  swapBtn?.addEventListener("click", function () {
    if (upper.disabled) {
      lower.disabled = true;
      lower.style.cursor = "not-allowed";
      lower.removeEventListener("input", handleUp);
      upper.disabled = false;
      upper?.addEventListener("input", handleLow);
    } else {
      lower.disabled = false;
      lower.addEventListener("input", handleUp);
      upper.disabled = true;
      upper.style.cursor = "not-allowed";
      upper?.removeEventListener("input", handleLow);
    }
  });
}
