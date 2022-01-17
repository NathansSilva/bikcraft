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

// Perguntas Frequentes subir/descer

const questions = document.querySelectorAll(".perguntas button");

function activateQuestion(e) {
  const question = e.currentTarget;
  const controls = question.getAttribute("aria-controls");
  const answer = document.getElementById(controls);

  answer.classList.toggle("ativa");
  const active = answer.classList.contains("ativa");
  question.setAttribute("aria-expanded", active);
  console.log(active);
}

function eQuestions(question) {
  question.addEventListener("click", activateQuestion);
}

questions.forEach(eQuestions);
