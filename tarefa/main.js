const form = document.querySelector('.form');

const input = document.getElementById('input');

const lista = document.getElementById('lista');

let todas = []

function listarTarefas() {
    lista.innerHTML = '';

    for(let i = 0; i < todas.length; i++) {
        const todo = todas[i];

        const li = document.createElement('li');
        const span = document.createElement('span');
        const button = document.createElement('button');

        span.innerHTML = todo;

        button.innerHTML = 'Excluir';
        addEventListener('click', function() {
            todas.splice(i, 1);
            listarTarefas();
        });

        li.appendChild(span);
        li.appendChild(button);

        lista.appendChild(li);

    }}

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const texto = input.value.trim();

        if (texto.length === 0) {
            return;
        }
        
        todas.push(texto);
        input.value = ''
        listarTarefas();
    })

    listarTarefas;