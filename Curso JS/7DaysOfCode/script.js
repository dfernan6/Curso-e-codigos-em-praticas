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

function cadastro(){
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var linguagem = document.getElementById("linguagem").value;
 
    var mensagem = document.getElementById("seltab");
    mensagem.innerHTML += `<option>Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!</option>`;

if (prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO?`) == '1') {
  alert("Muito bom! Continue estudando e você terá muito sucesso.");
} else {
  alert("Ahh que pena... Já tentou aprender outras linguagens?");
    }
  };