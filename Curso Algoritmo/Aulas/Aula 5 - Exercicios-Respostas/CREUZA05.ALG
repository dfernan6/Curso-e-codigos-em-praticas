Algoritmo "Creuza05"
Var
   Emprestimo, Total, Parcelas, Parcelamento: Real


Inicio
  Escreva(" Qual o valor do emprestimo?")
  Leia(Emprestimo)
  Total <- (Emprestimo * 20) / 100 + Emprestimo
  Escreva(" O valor do emprestimo é ", Total, " Digite o valor das parcelas: ")
  Leia(Parcelas)
  Escreva(" Então eu vou pagar em ", Parcelas, " vezes.")
  Parcelamento <- Total / Parcelas
  Escreva(" O valor parcelado em ", Parcelas, " parcelas é igual a ", Parcelamento, "R$ por mês. ")

Fimalgoritmo