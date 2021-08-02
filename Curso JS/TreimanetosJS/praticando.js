
    var pizza = 8
if ( pizza === 8 )
{
    
    console.log(`Vamos comer temos ${pizza} pedaços, tá inteira! `)
    var index = 0
   while ( pizza >= 1 && index < 7 )
   {
    index++
     var resultado = pizza - index
    console.log(` Ainda temos ${resultado} pedaços de pizza.`)

   } 
   if ( resultado === 1){
       console.log(`Realmente a nossa pizza acabou! vamos pegar mais :P`)
   }
}

else 
{
console.log("ERRO")
}
