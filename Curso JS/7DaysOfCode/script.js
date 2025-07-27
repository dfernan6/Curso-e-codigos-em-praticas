//#7DaysOfCode - Lógica JS 1/7: Operações Booleanas

let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if ( numeroUm == stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
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
    const reply = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO?`)
    mensagem.innerHTML += `<option>Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!</option>`

if ( reply == '1') {
 var alert = "Muito bom! Continue estudando e você terá muito sucesso.";
} else {
 var alert = "Ahh que pena... Já tentou aprender outras linguagens?";
  }
    
    mensagem.innerHTML += `<option>${alert}</option>`;

     const msg = prompt(`Você que estuda ${linguagem}?  Se você quer seguir para qual área?
 Front-end  1 ou back-end 2.`)

 if ( msg == '1') {
  let alert = "font-end";
  prompt(`Além de seu foco em ${alert} ,qual linguagem você quer aprender? React 1 ou Vue 2`);
} else {
  let alert = "back-end";
  prompt(`Além de seu foco em ${alert} ,qual linguagem você quer aprender? C# 1 ou Java 2`);
}

    const msg2 = prompt(`E você ${nome} gostaria de seguir se especializando na área escolhida 
ou seguir se desenvolvendo para se tornar Fullstack?
 Area escolhida 1 ou Fullstack 2`)


 if ( msg2 == '1') {
 let alert2 = "Area escolhida";
    prompt( `Quais são as tecnologias essenciais para ${alert2} ?`)
    for (let i = 0; i < 5; i++) {
      const msg3 = prompt(`Mais alguma tecnologia?`)
          mensagem.innerHTML += `${msg3}`
    }
} else {
let alert2 = "Area escolhida";
    prompt( `Quais são as tecnologias essenciais para ${alert2} ?`)
    for (let i = 0; i < 5; i++) {
      const msg3 = prompt(`Mais alguma tecnologia?`)
          mensagem.innerHTML += `${msg3}`
    }
  }

};


//#7DaysOfCode - Lógica JS 3/7: Fluxo de decisão

