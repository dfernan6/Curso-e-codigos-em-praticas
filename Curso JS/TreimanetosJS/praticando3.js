
var velocidadeDoCarro = 0
var anguloDoVolante = 0

function ligarDesligar(motor)
{
    if ( motor === "Ligar" )
    {

        return `Acabamos de ${motor} seu motor.`
    }
    else
    {
        return `Seu motor está desligado, vamos dar partida.` 
    }

}
function acelerar(incremento) 
{
  velocidadeDoCarro = velocidadeDoCarro + incremento
return `Aumentei a velocidade para ${velocidadeDoCarro}`
}
function frear(decremento)
{
 velocidadeDoCarro = velocidadeDoCarro - decremento;
return `Sua velocidade diminuiu para ${velocidadeDoCarro}`

}
function girarVolante(rotacao)
{
anguloDoVolante + rotacao
return `Seu volante esta nessa direção ${rotacao}º agora`

}
console.log(ligarDesligar("Ligar"))
console.log(acelerar(50))
console.log(frear(20))
console.log(girarVolante(10))