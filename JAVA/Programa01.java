/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/File.java to edit this template
 */

/**
 *
 * @author dfernan6
 */
class Programa01 
{

    public static void main(String entrada[]) 
    {
        // TODO code application logic here
        int NumInt;
        double NumReal, soma;
        char Caracter;
        
        //entrada de dados
        NumInt = Integer.parseInt(entrada[0]);
        NumReal = Double.parseDouble(entrada[1]);
        Caracter = (entrada[2]).charAt(0);
        //processamento
        soma = (double)NumInt + NumReal;
        //saida de resultados
        System.out.println((double)NumInt + " + " + NumReal + " = "+ soma + " sinal " + Caracter);
        
        System.exit(0);
    }
}
