document.addEventListener("DOMContentLoaded", main);
/*
a) Utilize a função document.createElement() para criar a tag img.
b) b) Altere o atributo src da imagem usando a propriedade img.src =
URL.createObjectURL(file), onde file é o arquivo selecionado pelo usuário.
c) c) Adicione a imagem à div com id="resultado" utilizando
resultado.appendChild(img).
*/

function main() {
  var input = document.getElementById("imageInput");
  addImage();
  input.addEventListener("change", addImage);
}

function addImage() {
  var input = document.getElementById("imageInput");
  var result = document.getElementById("result");
  var img = document.createElement("img");
  console.log("valor eh ", input.value);
  img.src = input.value;
  img.width = 300;
  result.appendChild(img);
}
