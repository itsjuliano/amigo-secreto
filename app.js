// Array para armazenar os nomes dos amigos
let listaDeAmigos = [];

// Função para adicionar amigos à lista
function adicionarAmigo() {
  const campoAmigo = document.getElementById('amigo');
  const nomeAmigo = campoAmigo.value.trim();

  // Verifica se o campo está vazio
  if (nomeAmigo === "") {
    alert("Por favor, insira um nome válido!");
    return;
  }

  // Adiciona o nome à lista de amigos
  listaDeAmigos.push(nomeAmigo);

  // Atualiza a lista exibida
  atualizarListaDeAmigos();

  // Limpa o campo de entrada após adicionar
  campoAmigo.value = "";
}

// Função para atualizar a lista de amigos exibida
function atualizarListaDeAmigos() {
  const listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = ''; // Limpa a lista antes de atualizar

  // Cria e adiciona um item para cada amigo
  listaDeAmigos.forEach(nome => {
    const li = document.createElement('li');
    li.textContent = nome;
    listaAmigos.appendChild(li);
  });
}

// Função para sortear o amigo secreto
function sortearAmigo() {
  if (listaDeAmigos.length === 0) {
    alert("Adicione pelo menos um nome para realizar o sorteio!");
    return;
  }

  // Sorteia um amigo aleatório
  const amigoSorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];

  // Exibe o nome sorteado
  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = `<li>O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;
}
