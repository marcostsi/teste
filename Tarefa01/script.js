document.querySelector('#empurrar').onclick = function () {
    const input = document.querySelector('#novatarefa input');
    const tarefasContainer = document.querySelector('#tarefas');

    if (input.value.trim() === "") {
        alert("Por favor insira uma tarefa");
    } else {
        tarefasContainer.innerHTML += `
            <div class="tarefas">
                <span id="nomedatarefa">
                    ${input.value}
                </span>
                <button class="delete">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        `;
        input.value = "";
        const tarefasAtual = document.querySelectorAll(".delete");
        for (let i = 0; i < tarefasAtual.length; i++) {
            tarefasAtual[i].onclick = function () {
                this.parentNode.remove();
            };
        }
    }
};