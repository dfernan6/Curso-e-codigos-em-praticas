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

// Botão "Alterar" agora só serve como atalho para salvar edição
window.deletar = function () {
  if (indexEditando !== null) {
    const nome = nomeInput.value.trim();
    const data = dataInput.value;
    dados[indexEditando] = { nome, data };
    indexEditando = null;
    atualizarLista();
    form.reset();
  } else {
    alert('Selecione um item para alterar.');
  }
};

// Inicializa a lista ao carregar
document.addEventListener('DOMContentLoaded', atualizarLista);