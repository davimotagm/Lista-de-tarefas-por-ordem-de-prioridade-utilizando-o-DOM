let tasks = [
  {
    titulo: "Fazer compra",
    tipo: "Urgente"
  },
  {
    titulo: "Limpar a casa",
    tipo: "Urgente"
  },
  {
    titulo: "Consertar Computador",
    tipo: "prioritário"
  },
  {
    titulo: "Separar dinheiro para o lanche",
    tipo: "Urgente"
  },
  {
    titulo: "Beber água",
    tipo: "prioritário"
  }
]
const olMain = document.querySelector("ol");

function adicionandoTarefas(lista) {

  lista.sort((a, b) => {
    // Definindo a ordem de prioridade
    const prioridades = ["URGENTE", "PRIORITÁRIO", "NORMAL"];

    // Obtendo o índice da prioridade de cada tarefa
    const indicePrioridadeA = prioridades.indexOf(a.tipo.toUpperCase(0));
    const indicePrioridadeB = prioridades.indexOf(b.tipo.toUpperCase(0));

    // Comparando os índices das prioridades
    return indicePrioridadeA - indicePrioridadeB;
  });


  for (let i = 0; i < lista.length; i++) {
    let tipoPrioridade = lista[i].tipo;

    // Criando tag li
    const div_li = document.createElement('li');

    // Adicionando os textos nas tags
    div_li.innerText = lista[i].titulo;

    // Adicionando classes nas tags
    div_li.classList.add('objetoLista');
    div_li.classList.add(tipoPrioridade.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")); //Tornando o propriedade da chave "tipo" do objeto MINÚSCULA e sem ACENTUAÇÃO, para a class das tags ficar conforme o padrão.

    // Definindo os objetos dentro da tag ol
    olMain.appendChild(div_li);
  }
}

// Formulário para acrecentar novos elementos na lista de tarefas
const buttonForm = document.getElementById('buttonForm')

buttonForm.addEventListener('click', function selecao(evt) {
  //Interrempendo o comportamento padrão do browser para evitar bugs.
  evt.preventDefault()

  // Definindo o valor do input em uma variável
  const tag_Input = document.getElementById('input_Value');
  const text_Input = tag_Input.value

  // Definindo o valor da select em uma variável
  const tag_Select = document.getElementById('option_Value');
  const valorIndicado = tag_Select.options[tag_Select.selectedIndex].value;

  // Atualizando o array da lista de tarefas de acordo com os valores definidos no formulário.
  tasks.push({ titulo: text_Input, tipo: valorIndicado });

  // Limpando o local onde está renderizando a lista
  olMain.innerText = ""

  // Adicionando as novas atividades definidas no formulário no HTML.
  adicionandoTarefas(tasks);
})
adicionandoTarefas(tasks);





