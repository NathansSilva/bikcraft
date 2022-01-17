//Ativar links do menu, é bom ter cada script separado

const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

//Includes
// console.log("javascript".includes("a"));

//Ativar links orçamento, transferindo info a partir de url

const params = new URLSearchParams(location.search);
// console.log(params);

function activateProduct(parameter) {
  const element = document.getElementById(parameter);
  if (element) {
    element.checked = true;
    console.log(element);
  }
}

params.forEach(activateProduct);
