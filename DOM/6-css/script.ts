function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

document.addEventListener("DOMContentLoaded", main);
function main() {
  blinkTitle(1000);
  blinkContent(2500);
}

async function blinkTitle(time: number) {
  const title = document.getElementById("title");
  while (true) {
    title!.style.color = "blue";
    await sleep(time);
    title!.style.color = "orange";
    await sleep(time);

    title!.style.color = "red";
    await sleep(time);

    title!.style.color = "green";
    await sleep(time);
  }
}

async function blinkContent(time: number) {
  const pars = document.getElementsByTagName("p");
  while (true) {
    Array.from(pars).forEach((p: any) => (p.style.color = "crimson"));
    await sleep(time);
    Array.from(pars).forEach((p: any) => (p.style.color = "yellow"));
    await sleep(time);
    Array.from(pars).forEach((p: any) => (p.style.color = "brown"));
    await sleep(time);
    Array.from(pars).forEach((p: any) => (p.style.color = "cyan"));
    await sleep(time);
  }
}
