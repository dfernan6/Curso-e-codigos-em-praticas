Algoritmo "Creuza05"
Var
   Emprestimo, Total, Parcelas, Parcelamento: Real


Inicio
  Escreva(" Qual o valor do emprestimo?")
  Leia(Emprestimo)
  Total <- (Emprestimo * 20) / 100 + Emprestimo
  Escreva(" O valor do emprestimo � ", Total, " Digite o valor das parcelas: ")
  Leia(Parcelas)
  Escreva(" Ent�o eu vou pagar em ", Parcelas, " vezes.")
  Parcelamento <- Total / Parcelas
  Escreva(" O valor parcelado em ", Parcelas, " parcelas � igual a ", Parcelamento, "R$ por m�s. ")

Fimalgoritmo