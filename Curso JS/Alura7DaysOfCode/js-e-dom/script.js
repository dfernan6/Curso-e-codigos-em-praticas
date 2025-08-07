const form = document.getElementById('form');
const nomeInput = document.getElementById('name');
const dataInput = document.getElementById('birth-date');
const resultado = document.getElementById('resultado');

let dados = JSON.parse(localStorage.getItem('usuarios')) || [];
let indexEditando = null;

// Função para formatar data para dd-mm-aaaa
function formatarDataBrasileira(dataISO) {
  const [ano, mes, dia] = dataISO.split('-');
  return `${dia}-${mes}-${ano}`;
}

// Atualiza a tabela na tela
function atualizarLista() {
  resultado.innerHTML = '';
  dados.forEach((item, index) => {
    const corLinha = index % 2 === 0 ? 'linha-verde-clara' : 'linha-azulada';
    const tr = document.createElement('tr');
    tr.className = corLinha;
    tr.innerHTML = `
      <td><strong>${item.nome}</strong></td>
      <td>${formatarDataBrasileira(item.data)}</td>
      <td>
        <button onclick="editar(${index})" class="btn btn-sm btn-outline-primary me-2">✏️ Editar</button>
        <button onclick="deletar(${index})" class="btn btn-sm btn-outline-danger">❌ Deletar</button>
      </td>
    `;
    resultado.appendChild(tr);
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
    dados[indexEditando] = { nome, data };
    indexEditando = null;
  } else {
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

// Deletar item
window.deletar = function(index) {
  dados.splice(index, 1);
  localStorage.setItem("usuarios", JSON.stringify(dados));
  atualizarLista();
};

// Inicializa a lista ao carregar
document.addEventListener('DOMContentLoaded', atualizarLista);