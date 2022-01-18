const forms = document.querySelector("form");
// previne o padrão inteiro const forms = document.querySelector("form button");

function formSent(formAnswer) {
  if (formAnswer.ok) {
    forms.innerHTML =
      "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7';><span style='color: #317A00'>Mensagem enviada</span>, em breve entraremos em contato. Geralmente respondemos em 24 horas.</p>";
  } else {
    forms.innerHTML =
      "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7';><span style='color: #E00000'>Erro no envio</span>, você pode enviar diretamente para o nosso email: zeig@zeig.com</p>";
  }
}

function sendForm(e) {
  e.preventDefault();
  const buttonForm = document.querySelector("form button");
  buttonForm.disabled = true;
  buttonForm.innerText = "Enviando...";

  const data = new FormData(forms);
  //FormData = classe do js. console.log(data.get("email"));

  fetch("./enviar.php", {
    method: "POST",
    body: data,
  }).then(formSent);
}

forms.addEventListener("submit", sendForm);
