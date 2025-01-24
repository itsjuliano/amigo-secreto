// 1. Criação do array para armazenar os nomes
let amigos = [];

// 2. Função para adicionar amigos
function adicionarAmigo() {
  // Captura o valor do campo de entrada
  const campoAmigo = document.getElementById('amigo');
  const nomeAmigo = campoAmigo.value.trim();

  // Valida se o campo está vazio
  if (nomeAmigo === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  // Atualiza o array com o nome válido
  amigos.push(nomeAmigo);

  // Atualiza a lista visível na tela
  atualizarListaDeAmigos();

  // Limpa o campo de entrada após adicionar
  campoAmigo.value = "";
}

// Função para atualizar a lista de amigos exibida
function atualizarListaDeAmigos() {
  const listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = ''; // Limpa a lista antes de atualizar

  // Cria e adiciona um item para cada amigo na lista
  amigos.forEach(nome => {
    const li = document.createElement('li');
    li.textContent = nome;
    listaAmigos.appendChild(li);
  });
}

// 3. Função para sortear um amigo
function sortearAmigo() {
  // Verifica se há amigos na lista
  if (amigos.length === 0) {
    alert("Adicione pelo menos um amigo antes de sortear.");
    return;
  }

  // Gera um índice aleatório
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Seleciona o nome sorteado
  const amigoSorteado = amigos[indiceAleatorio];

  // Exibe o resultado
  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = `<li>O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;
}
