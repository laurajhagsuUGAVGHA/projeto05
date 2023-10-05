// Seleciona o formulário de login 
const form = document.querySelector('.login-form')

//Seleciona o campo de entrada do usuario
const usuarioInput = form.querySelector("input[type='text']")

const senhaInput = form.querySelector("input[type='password']")


form.addEventListener('submit', (event) => {
 
    event.preventDefault();

    //Obtém os valores dos campos de entrada do usuario e senha e o trim() remove os espaços em branco tanto no começo quanto no final de cada campo
  
    const usuario = usuarioInput.value.trim();
    const senha = senhaInput.value.trim();

    if(usuario === '' || senha === '') {
        alert("Por favor, preencha os campos");
    } else if (usuario === 'usuario' && senha === 'senha'){
        alert("Bem vindo!")
        location.replace("/tarefa/index.html","_self")
    } else {
        alert("Usuário ou senha incorreto, tente novamente")
    }

})