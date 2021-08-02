let amigo = {nome: "José" , 
sexo: "homem" , 
peso: 85 ,
idade: 46,
engordar(p=8){
console.log("Engordou")
this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg e é um ${amigo.sexo} de ${amigo.idade} anos de idade.`)
amigo.engordar(2)
console.log(`${amigo.nome} voltou a engordar mais 2 Kg agora está com ${amigo.peso}Kg.`)

