const prompt = require("prompt-sync")()


let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

function registrar() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if (!email || !senha) {
    mostrarMensagem("Preencha todos os campos", true);
    return;
  }

 
  const existe = usuarios.find(user => user.email === email);
  if (existe) {
    mostrarMensagem("Usuário já registrado", true);
    return;
  }

 
  usuarios.push({ email, senha });
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  mostrarMensagem("Registro realizado com sucesso");
}

function entrar() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if (!email || !senha) {
    mostrarMensagem("Preencha todos os campos", true);
    return;
  }


  const valido = usuarios.find(user => user.email === email && user.senha === senha);
  if (valido) {
    mostrarMensagem("Login bem-sucedido");
  } else {
    mostrarMensagem("Email ou senha incorretos", true);
  }
}

function mostrarMensagem(msg, erro = false) {
  const p = document.getElementById("mensagem");

}
