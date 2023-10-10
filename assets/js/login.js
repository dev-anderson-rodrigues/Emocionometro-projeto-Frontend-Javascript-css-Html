formulario = document.getElementById('miFormulario');
const email = document.getElementById("email");
const inputEmail = document.querySelector('.content-email');
const senha = document.getElementById("password");
const inputSenha = document.querySelector('.content-senha');


formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  
  if(email.value == "" ||
  senha.value == ""){
    email.style.border = "2px solid red";
    inputEmail.style.color = "red";
    senha.style.border = "2px solid red";
    inputSenha.style.color = "red";

  }else {
    email.style.border = "2px solid #00C247";
    inputEmail.style.color = "#00C247";
    senha.style.border = "2px solid #00C247";
    inputSenha.style.color = "#00C247";

    setTimeout(function() {
        window.location.href = '/pages/login/loading/loading.html';
      },2000);
  }

});
