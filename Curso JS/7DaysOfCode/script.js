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
  let produtos = prompt(`Você deseja adicionar algum na sua lista de compras?
    Por favor responda "Sim" ou "Não"`)

    if (produtos == "Sim") {
      executarLoop(lista);
    } else if (produtos == "Não") {
      console.log(`Muito Obrigado! Você poderá solicitar outra lista no terminal quando quiser.`);
    } else {
      prompt("Resposta incorreta! Favor solicite novamente a montagem da lista no terminal.")
    }
  }


function executarLoop(lista) {
  let continuar = true;

  while (continuar) {
    let duvida = Number(prompt("Quantos itens você quer adicionar na sua lista?"));

    for (let i = 0; i < duvida; i++) {
      let produto = prompt("Qual produto você quer adicionar na sua lista?");
      let categoria = prompt(`Em qual categoria essa comida se encaixa?\nFrutas, Laticínios, Congelados ou Doces?`);

      // Criar objeto com produto e categoria
      let item = {
        nome: produto,
        categoria: categoria
      };

      lista.push(item);
    }

    let esclarecer = prompt(`Mais algum produto ou podemos imprimir a lista?\nPressione '1' para mais produtos ou '2' para imprimir`);

    if (esclarecer === '2') {
      continuar = false;
      console.log("🛍️ Lista de Compras Organizada:");
      lista.forEach((item, index) => {
        console.log(`${index + 1}. ${item.nome} — Categoria: ${item.categoria}`);
      });
    } else if (esclarecer !== '1') {
      console.log("❌ Resposta incorreta! Vou questionar novamente!");
    }
  }
}

