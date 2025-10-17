// 🎨 COR SELECIONADA
const nomeCorSelecionada = document.getElementById('nome-cor-selecionada');
const opcoesCores = document.getElementsByName('opcao-cor');
const tituloProduto = document.getElementById('titulo-produto');
const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const opcoesImagem = document.getElementsByName('opcao-imagem');

const cores = [
  {
    nome: 'Verde-cipreste',
    pasta: 'imagens-verde-cipreste'
  },
  {
    nome: 'Azul-inverno',
    pasta: 'imagens-azul-inverno'
  },
  {
    nome: 'Meia-noite',
    pasta: 'imagens-meia-noite'
  },
  {
    nome: 'Estelar',
    pasta: 'imagens-estelar'
  },
  {
    nome: 'Rosa-claro',
    pasta: 'imagens-rosa-claro'
  }
];

function atualizarCorSelecionada() {
  let imagemSelecionadaIndex = 0;

  // Captura qual imagem está selecionada antes da troca
  for (let i = 0; i < opcoesImagem.length; i++) {
    if (opcoesImagem[i].checked) {
      imagemSelecionadaIndex = i;
      break;
    }
  }

  for (let i = 0; i < opcoesCores.length; i++) {
    if (opcoesCores[i].checked) {
      const cor = cores[i];

      // Atualiza nome da cor
      nomeCorSelecionada.innerText = `Cor - ${cor.nome}`;

      // Atualiza título do produto com cor e tamanho
      tituloProduto.innerText = `Pulseira loop esportiva ${cor.nome.toLowerCase()} para caixa de ${obterTamanhoSelecionado()}`;

      // Atualiza miniaturas
      for (let j = 0; j < opcoesImagem.length; j++) {
        const miniatura = document.getElementById(`${j}-imagem-miniatura`);
        miniatura.src = `./imagens/opcoes-cores/${cor.pasta}/imagem-${j}.jpeg`;
      }

      // Restaura imagem selecionada
      opcoesImagem[imagemSelecionadaIndex].checked = true;
      atualizarImagemSelecionada();

      break;
    }
  }
}

// 📏 TAMANHO DA CAIXA
const opcoesTamanho = document.getElementsByName('opcao-tamanho');

function atualizarTamanho() {
  const tamanhos = ['41 mm', '45 mm'];
  for (let i = 0; i < opcoesTamanho.length; i++) {
    if (opcoesTamanho[i].checked) {
      // Atualiza título
      tituloProduto.innerText = tituloProduto.innerText.replace(/caixa de \d{2} mm/, `caixa de ${tamanhos[i]}`);

      // Aplica ou remove classe de escala
      imagemVisualizacao.classList.remove('caixa-pequena');
      if (tamanhos[i] === '41 mm') {
        imagemVisualizacao.classList.add('caixa-pequena');
      }

      break;
    }
  }
}

function obterTamanhoSelecionado() {
  for (let i = 0; i < opcoesTamanho.length; i++) {
    if (opcoesTamanho[i].checked) {
      return i === 0 ? '41 mm' : '45 mm';
    }
  }
}

// 🖼️ IMAGEM SELECIONADA
function atualizarImagemSelecionada() {
  for (let i = 0; i < opcoesImagem.length; i++) {
    const miniatura = document.getElementById(`${i}-imagem-miniatura`);
    if (opcoesImagem[i].checked) {
      imagemVisualizacao.src = miniatura.src;
      miniatura.classList.add('miniatura-selecionada');
    } else {
      miniatura.classList.remove('miniatura-selecionada');
    }
  }
}



