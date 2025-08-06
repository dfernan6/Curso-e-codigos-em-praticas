const form = document.getElementById('form');
const nomeInput = document.getElementById('name');
const dataInput = document.getElementById('birth-date');
const resultado = document.getElementById('resultado');

let dados = JSON.parse(localStorage.getItem('usuarios')) || [];
let indexEditando = null;

// Atualiza a lista na tela
function atualizarLista() {
  resultado.innerHTML = '';
  dados.forEach((item, index) => {
    const div = document.createElement('div');
    div.innerHTML = `
      <strong>${item.nome}</strong> - ${item.data}
      <button onclick="editar(${index})">✏️ Editar</button>
      <button onclick="deletar(${index})">❌ Deletar</button>
    `;
    resultado.appendChild(div);
  });
  localStorage.setItem('usuarios', JSON.stringify(dados));
}

// Salvar novo ou editar existente
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const nome = nomeInput.value.trim();
  const data = dataInput.value;

  if (!nome || !data) return;

  if (indexEditando !== null) {
    // Atualiza existente
    dados[indexEditando] = { nome, data };
    indexEditando = null;
  } else {
    // Adiciona novo
    dados.push({ nome, data });
  }

  form.reset();
  atualizarLista();
});

// Editar item
window.editar = function (index) {
  const item = dados[index];
  nomeInput.value = item.nome;
  dataInput.value = item.data;
  indexEditando = index;
};

// Limpar tudo
window.limparFila = function () {
  dados = [];
  localStorage.removeItem('usuarios');
  atualizarLista();
  form.reset();
};

// Botão "Deletar" agora só serve como atalho para salvar edição
window.deletar = function(index) {
  dados.splice(index, 1); // Remove o item do array
  localStorage.setItem("usuarios", JSON.stringify(dados)); // Atualiza o localStorage
  atualizarLista(); // Re-renderiza a lista na tela
};



// Inicializa a lista ao carregar
document.addEventListener('DOMContentLoaded', atualizarLista);