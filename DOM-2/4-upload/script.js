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
  var result = document.getElementById("result");
  var img = document.createElement("img");

  input.addEventListener("change", function () {
    // result.textContent = input.value;
    var fReader = new FileReader();
    fReader.readAsDataURL(input.files[0]);
    fReader.onloadend = function (event) {
      img.src = event.target.result;
      img.width = 300;
      result.appendChild(img);
    };
  });
}

function addImage() {}
