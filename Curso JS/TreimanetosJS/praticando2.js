
function corDoSemaforo(sinal){

if ( sinal === "verde")
{

    console.log(`O sinal está ${sinal}, Pode ir!`)
}
else if ( sinal === "amarelo") 
{
console.log(`O sinal está ${sinal}, Atenção!`)
}
else
{
    console.log(`O sinal está ${sinal}, Pare!`)
}
}
console.log(corDoSemaforo("amarelo"))