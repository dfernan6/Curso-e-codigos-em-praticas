function Contar(){
var inicial = document.getElementById("txti")
var final = document.getElementById("txtf")
var ritmo = document.getElementById("txtp")
var res = document.getElementById("resposta")



if ( inicial.value.length == 0 || final.value.length == 0 || ritmo.value.length == 0)
{
    window.alert("Faltam informaçoes")  
} else {
    var numero = Number(inicial.value)
var numeroDefinido = Number(final.value)
var passo = Number(ritmo.value)
if ( passo <= 0){
    window.alert("Passo invalido! Considerando Passo 1")
    passo = 1
}
if ( numero < numeroDefinido ) { 
    for ( var index = numero ; index < numeroDefinido ; index += passo)
    {
        res.innerHTML = "Contando..."
        res.innerHTML += `${index} \u{1F603}`
    }
} else { 
    
for ( var index = numero ; index >= numeroDefinido ; index -= passo) 
{
    res.innerHTML = "Contando..."
    res.innerHTML += `${index} \u{1F603}` 
}
}
}
}
