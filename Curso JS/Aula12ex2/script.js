
function verificar(){
var nascimento = new Date()
var ano = nascimento.getFullYear()
var fano = document.getElementById("nasc")
var res = window.document.getElementById("resposta")
var imagem = document.getElementById("foto")
var somada = ano - fano.value
var sexoEscolhido = document.getElementsByName("sexo")

if ( somada >= 60 && sexoEscolhido[0].checked ){ 
    res.innerHTML = `O <b>senhor</b> tem <b>${somada}</b> anos` , imagem.innerHTML = `<img src="velho.jpg"></img src>`
    document.body.style.backgroundColor = "#008080"

}
 else if ( somada >= 21 && somada < 60 && sexoEscolhido[0].checked  ) { 
    res.innerHTML = `O <b>senhor</b> tem <b>${somada}</b> anos` , imagem.innerHTML = `<img src="homem.jpg"></img src>`
    document.body.style.backgroundColor = "#008080"

}
else if ( somada >= 8 && somada < 21 && sexoEscolhido[0].checked ) {
    res.innerHTML = `O <b>senhor</b> tem <b>${somada}</b> anos` , imagem.innerHTML = `<img src="jovemm.jpg"></img src>`
    document.body.style.backgroundColor = "#008080"

}
else if ( somada >= 0 && somada < 8 && sexoEscolhido[0].checked ) { 
    res.innerHTML = `Você é um <b>garoto</b>, tem somente <b>${somada}</b> anos.` , imagem.innerHTML = `<img src="menino.png"></img src>`
    document.body.style.backgroundColor = "#008080"

}
else if ( somada >= 60 && sexoEscolhido[1].checked ) {
    res.innerHTML = `A <b>senhora</b> tem <b>${somada}</b> anos.` , imagem.innerHTML = `<img src="velha.jpg"></img src>` ,
document.body.style.backgroundColor = "#DA70D6"

}
else if ( somada >= 21 && somada < 60 && sexoEscolhido[1].checked) { 
    res.innerHTML = `A <b>senhora</b> tem <b>${somada}</b> anos.` , imagem.innerHTML = `<img src="mulher.png"></img src>`,
    document.body.style.backgroundColor = "#DA70D6"

}
else if ( somada >= 8 && somada < 21 && sexoEscolhido[1].checked) {
    res.innerHTML = `A <b>senhora</b> tem <b>${somada}</b> anos.` , imagem.innerHTML = `<img src="jovemn.jpg"></img src>` ,
    document.body.style.backgroundColor = "#DA70D6"

}
else if ( somada >= 0 && somada < 8 && sexoEscolhido[1].checked ) { 
    res.innerHTML = `Você é uma <b>garota</b>, tem somente <b>${somada}</b> anos.` , imagem.innerHTML = `<img src="menina.jpg"></img src>` ,
    document.body.style.backgroundColor = "#DA70D6"

}

 else { 
    res.innerHTML = `Você tem <b>${somada}</b> anos.` , imagem.innerHTML = `<img src="menino.png"></img src>` 

} 

}