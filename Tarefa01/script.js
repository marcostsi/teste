document.querySelector('#empurrar').onclick = function(){
    if(document.querySelector('#container input').value.length == 0){
        alert("Por favor insira uma tarefa")
    }
    else{
        document.querySelector('tarefas').innerHTML += `
    <div class="tarefas">
        <span id="nomedatarefa">
        ${document.querySelector('#container input').value}
        </span>
        <button class="delete"><i class="longe"></i></button>
    </div>
    `;
    let tarefas_atual = document.querySelectorAll(".delete");
    for(let i=0; i < tarefas_atual.length; i++){
        tarefas_atual[i].onclick = function(){
            this.parentNode.remove();
        }
    }
    }
}