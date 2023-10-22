formulario = document.getElementById("miFormulario");
const emailColor = document.getElementById("email");
const inputEmail = document.querySelector(".content-email");
const senhaColor = document.getElementById("password");
const inputSenha = document.querySelector(".content-senha");
const botao = document.querySelector("#Entrar");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  if (emailColor.value == "" || senhaColor.value == "") {
    emailColor.style.border = "2px solid red";
    inputEmail.style.color = "red";
    senhaColor.style.border = "2px solid red";
    inputSenha.style.color = "red";
  } else {
    emailColor.style.border = "2px solid #00C247";
    inputEmail.style.color = "#00C247";
    senhaColor.style.border = "2px solid #00C247";
    inputSenha.style.color = "#00C247";
    botao.style.background = "#00C247";
  }
});
const senhaInput = document.getElementById("password");

function mostrarSenhaIcon() {
  if (senhaInput.type === "password") {
    senhaInput.type = "text";
  } else {
    senhaInput.type = "password";
  }
}

document
  .querySelector("#miFormulario")
  .addEventListener("submit", function (e) {
    e.preventDefault(e);

    const email = document.getElementById("email").value;
    const senha = document.getElementById("password").value;
    const msgError = document.getElementById("msg-error");
    const emailColor = document.getElementById("email");
    const inputEmail = document.querySelector(".content-email");
    const senhaColor = document.getElementById("password");
    const inputSenha = document.querySelector(".content-senha");

    async function autenticarUsuario(email, senha) {
      try {
        const response = await fetch(
          `https://json-teste-eight.vercel.app/usuarios?email=${email}&senha=${senha}`
        );
        const usuarios = await response.json();

        if (usuarios.length === 1) {
          return usuarios[0];
        } else {
          console.log("Email ou senha incorretos");
        }
      } catch (error) {
        console.error("Erro ao autenticar usuário:", error);
      }
    }

    autenticarUsuario(email, senha)
      .then((usuario) => {
        emailColor.style.border = "2px solid #00C247";
        inputEmail.style.color = "#00C247";
        senhaColor.style.border = "2px solid #00C247";
        inputSenha.style.color = "#00C247";
        botao.style.background = "#00C247";
        msgError.innerHTML = "Autenticando...";
        msgError.style.color = "black";
        validarUsuario(usuario);
      })
      .catch((error) => {
        emailColor.style.border = "2px solid red";
        inputEmail.style.color = "red";
        senhaColor.style.border = "2px solid red";
        inputSenha.style.color = "red";
        console.error("Erro ao autenticar usuário:", error);
        msgError.innerHTML = "Email ou senha incorretos";
        msgError.style.color = "red";
      });

    function validarUsuario(usuario) {
      if (!usuario.value === true) {
        setTimeout(function () {
          window.location.href = "/pages/login/loading/loading.html";
        }, 1500);
      }
    }
  });