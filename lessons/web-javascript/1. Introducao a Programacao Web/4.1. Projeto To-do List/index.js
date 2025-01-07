function adicionarTarefa() {
    let input = document.getElementById('tarefaInput');
    let novaTarefa = input.value.trim();

    if (novaTarefa) {
        let lista = document.getElementById('listaTarefas');
        let item = document.createElement('li');
        item.className = 'task-item'; // Adiciona class name
        item.textContent = novaTarefa;

        // Evento de clique para marcar a tarefa como concluída
        item.addEventListener('click', function() {
            this.classList.toggle('completed'); // Alterna a classe "completed"
        });

        // Botão de remover
        let botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        botaoRemover.className = 'remove-btn'; // Adiciona class name
        botaoRemover.onclick = function() {
            lista.removeChild(item);
        };

        item.appendChild(botaoRemover);
        lista.appendChild(item);

        input.value = ''; // Limpa o campo de entrada
    } else {
        alert('Por favor, insira uma tarefa válida.');
    }
}
