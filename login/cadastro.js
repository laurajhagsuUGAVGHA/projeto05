function criarConta() {
    const usuarioInput = document.getElementById("usuario");
    const emailInput = document.getElementById("email");
    const telefoneInput = document.getElementById("telefone");
    const senhaInput = document.getElementById("senha");
    const mensagem = document.getElementById("mensagem");

    const usuario = usuarioInput.value;
    const email = emailInput.value;
    const telefone = telefoneInput.value;
    const senha = senhaInput.value;

    if (usuario.trim() === "" || email.trim() === "" || telefone.trim() === "" || senha.trim() === "") {
        mensagem.textContent = "Preencha todos os campos!";
    } else {
        mensagem.textContent = "Conta criada com sucesso!";
        usuarioInput.value = "";
        emailInput.value = "";
        telefoneInput.value = "";
        senhaInput.value = "";
    }
}