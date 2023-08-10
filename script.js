let tasks = [
  {
    titulo: "Comprar comida para o gato",
    tipo: "Urgente"
  },
  {
    titulo: "Limpar o quarto",
    tipo: "Urgente"
  },
  {
    titulo: "Consertar Computador",
    tipo: "prioritário"
  },
  {
    titulo: "Guardar dinheiro do lanche",
    tipo: "Urgente"
  },
  {
    titulo: "Beber água",
    tipo: "prioritário"
  }
]

function adicionandoTarefas(lista) {
  const olMain = document.querySelector("ol");

  lista.sort((a, b) => {
    // Definindo a ordem de prioridade
    const prioridades = ["URGENTE", "PRIORITÁRIO"];

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
adicionandoTarefas(tasks);

