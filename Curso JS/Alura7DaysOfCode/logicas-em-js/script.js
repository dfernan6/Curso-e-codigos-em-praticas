//#7DaysOfCode - Lógica JS 1/7: Operações Booleanas

let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if ( numeroUm == stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes');
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if ( numeroTrinta == stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

if (numeroDez == stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}

//#7DaysOfCode - Lógica JS 2/7: 👩🏽‍💻 Variáveis
let nome;
let idade;
let linguagem;
let mensagem;

function cadastro(){
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let linguagem = document.getElementById("linguagem").value;
    let mensagem = document.getElementById("seltab");
    mensagem.innerHTML += `<option>Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!</option>`;
    const reply = prompt(`Você gosta de estudar ${linguagem}?`);
      decisao(linguagem, mensagem);
      especialidade(nome, mensagem);
if ( reply == 'Sim') {
 var alert = "Muito bom! Continue estudando e você terá muito sucesso.";
} else if ( reply == 'Não'){
 var alert = "Ahh que pena... Em breve você encontrará algo que goste!";
  }
    mensagem.innerHTML += `<option>${alert}</option>`;
}

//#7DaysOfCode - Lógica JS 3/7: Fluxo de decisão

function decisao(linguagem, mensagem) {
  const msg = prompt(`Você que estuda ${linguagem}?  Se você quer seguir para qual área?
  Front-end  1 ou back-end 2.`)

  if ( msg == '1') {
  let alert = "front-end";
  var reply2  = prompt(`Além de seu foco em ${alert} ,qual linguagem você quer aprender? React 1 ou Vue 2`);
     if (reply2 == '1'){
     mensagem.innerHTML += `React é uma ótima escolha de linguagem para ${alert}`;
     } else if (reply2 == '2'){
     mensagem.innerHTML += `Vue é uma ótima escolha de linguagem para ${alert}`;
      } else {
        prompt(`Resposta incorreta! Perguntarei novamente!`);
        decisao(linguagem, mensagem);
  }
} else if (msg == '2') {
  let alert = "back-end";
    var reply2 = prompt(`Além de seu foco em ${alert} ,qual linguagem você quer aprender? C# 1 ou Java 2`);
       if (reply2 == '1'){
     mensagem.innerHTML += `C# é uma ótima escolha de linguagem para ${alert}`;
     } else if (reply2 == '2'){
     mensagem.innerHTML += `Java é uma ótima escolha de linguagem para ${alert}`;
      } else {
        prompt(`Resposta incorreta! Perguntarei novamente!`);
        decisao(linguagem, mensagem);
  }
} else {
  prompt(`Resposta incorreta! Perguntarei novamente!`);
  decisao(linguagem, mensagem);
  }
}

function especialidade(nome, mensagem){
    let msg2 = prompt(`E você ${nome} gostaria de seguir se especializando na Area escolhida ou  se tornar Fullstack? Area escolhida 1 ou Full-stack 2`)

 if ( msg2 == '1') {
 let alert2 = "Area escolhida";
 let quantidade = Number(prompt( `Quantas tecnologias são essenciais para ${alert2} ?`));
    for (let i = 0; i < quantidade; i++) {
      let msg3 = prompt(`Quais tecnologias?`)
          mensagem.innerHTML +=  `${msg3}, `;
    }
} else if (msg2 == '2') {
let alert2 = "Full-stack";
  let quantidade =  Number(prompt( `Quantas tecnologias são essenciais para ${alert2} ?`));
    for (let i = 0; i < quantidade; i++) {
      let msg3 = prompt(`Quais tecnologias?`)
          mensagem.innerHTML +=  `${msg3}, `;
} 
} else {
  prompt(`Resposta incorreta! Perguntarei novamente!`);
  especialidade(nome, mensagem);
  }
};

//#7DaysOfCode - Lógica JS 4/7: 👩🏽‍💻 Mais loops e randomização

function sorteio() {
  var chute = prompt(`Chute um número de 1 a 10`)
  var numero = Math.floor(Math.random() * (10 - 0 + 1) + 0)

  if (chute == numero){
    prompt(`O número sorteado foi ${numero} Parabéns!! Você acertou!!`)
  } else {
      for (var i = 10; i >= 0; i--){
        var chute = prompt(`O número sorteado foi ${numero}, Chute um número de 1 a 10.
          Você tem mais ${i} tentativas!`);
        var numero = Math.floor(Math.random() * (10 - 0 + 1) + 0);
        chute; 
        if (chute == numero){
        var msg = prompt(`O número sorteado foi ${numero} Parabéns!! Você acertou!!`);
        msg;
        break;
    } else if (i == 0) {
      var msg = prompt(`Dez tentativa sem acerto! Desclassificado! `)
      msg;
     }
    } 
  }
}

//#7DaysOfCode - Lógica JS 5/7: Arrays e coleções

function compras() {
  const lista = []
  let produtos = prompt(`Você deseja adicionar algum produto na sua lista de compras?
    Por favor responda "Sim" ou "Não"`);

    if (produtos == "Sim") {
      executarLoop(lista);
    } else if (produtos == "Não") {
      console.log(`Muito Obrigado! Você poderá solicitar outra lista no terminal quando quiser.`);
    } else {
      prompt("Resposta incorreta! Favor solicite novamente a montagem da lista no terminal.")
    }
  }


function executarLoop(lista) {
  var continuar = true;

  while (continuar) {
        console.log("🛍️ Lista de Compras Organizada:");
    lista.forEach((item, index) => {
      console.log(`${index + 1}. ${item.nome} — Categoria: ${item.categoria}`);
    });
    let duvida = Number(prompt(`Quantos itens você quer adicionar? Quiser Sair pressione '0'`));

    if (duvida == '0'){
      continuar = false;
      break;
    }

    for (let i = 0; i < duvida; i++) {
      let produto = prompt("Qual produto você quer adicionar na sua lista?");
      let categoria = prompt(`Em qual categoria esse produto se encaixa? Exemplos:\nFrutas, Laticínios, Congelados ou Doces?`);

      // Criar objeto com produto e categoria
      const item = {
        nome: produto,
        categoria: categoria
      };

      lista.push(item);
    }

    let esclarecer = prompt(`Por favor, verifique a lista dos produtos para podermos imprimir?
    \nAdicionar - '1', Excluir - '2', Imprimir - '3'`);

    if (esclarecer === '1'){
      executarLoop(lista);
      break;
    }
     else if (esclarecer === '2'){
            console.log("🛍️ Lista de Compras Organizada:");
      lista.forEach((item, index) => {
        console.log(`${index + 1}. ${item.nome} — Categoria: ${item.categoria}`);
      });
      deletar(lista);
      console.log("🛍️ Lista de Compras Organizada:");
      lista.forEach((item, index) => {
        console.log(`${index + 1}. ${item.nome} — Categoria: ${item.categoria}`);
      });
    }

    else if (esclarecer === '3') {
      continuar = false;
      console.log("🛍️ Lista de Compras Organizada:");
      lista.forEach((item, index) => {
        console.log(`${index + 1}. ${item.nome} — Categoria: ${item.categoria}`);
      });
    } else  {
      console.log("❌ Resposta incorreta! Por favor nos acione novamten!");
      continuar = false;
    }
  }
}

//#7DaysOfCode - Lógica JS 6/7: 👩🏽‍💻 Remoção de Arrays

function deletar(lista){
  let nomeRemover = prompt("Qual produto você quer remover na sua lista?");
  let categoriaRemover = prompt(`Em qual categoria esse produto se encaixa? Exemplos:\nFrutas, Laticínios, Congelados ou Doces?`);
  let indiceRemover = lista.findIndex(item => item.nome.toLowerCase() === nomeRemover.toLowerCase());
  let categoriaDeletar = lista.findIndex(item => item.categoria.toLowerCase() === categoriaRemover.toLowerCase());

  if (indiceRemover !== -1 && categoriaDeletar !== -1) {
  lista.splice(indiceRemover, 1);
  lista.splice(categoriaDeletar, 1);
  console.log(`✅ Produto "${nomeRemover}" de sua Categoria: ${categoriaRemover} removido com sucesso!`);
} else {
  console.log(`❌ Produto "${nomeRemover}" não encontrado na lista.`);
}
};

//#7DaysOfCode - Lógica JS 7/7: Funções em Javascript

function calculadora(){
  var calculo = prompt(`Simblos de cálculo: + - / *!: Cancelar pressione x`);
  

 switch (calculo) {
    case "+":
        var a = Number(prompt(`Digite o primeiro número!`));
        var b = Number(prompt(`Digite o segundo número!`));
        console.log(somar(a,b))
        break;
    case "-":
        var a = Number(prompt(`Digite o primeiro número!`));
        var b = Number(prompt(`Digite o segundo número!`));
        console.log(subtrair(a,b))
        break;
    case "*":
        var a = Number(prompt(`Digite o primeiro número!`));
        var b = Number(prompt(`Digite o segundo número!`));
        console.log(multiplicar(a,b))
        break;
    case "/":
        var a = Number(prompt(`Digite o primeiro número!`));
        var b = Number(prompt(`Digite o segundo número!`));
        console.log(dividir(a,b))
        break;
    case "x":
        break;
    default:
        alert(`Símbolo incorreto!Favor realize o cálculo novamente!`);
        calculadora();
    }
}


function somar(a,b){
     return a + b;
}

function subtrair(a,b){
    return a - b;
}

function multiplicar(a,b){
    return a * b;
}

function dividir(a,b){
    return a / b;
}