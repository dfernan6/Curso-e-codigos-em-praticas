import javax.swing.*;

public class ModulosMatrizesParametros
{
    public static void soma (int vetor[])
    {
        int s=0;
        
        for (int i = 0 ; i < vetor.length ; i++)
        {
            s = s + vetor[i];
        }
        JOptionPane.showMessageDialog(null, "A somatoria eh: " + s);
    }
  
    public static int produto (int vetor[])
    {
        int p=1;
        for (int i = 0 ; i < vetor.length ; i++)
        {
            p = p * vetor[i];
        }
            return p;
    }
    
    public static void main(String args[]) 
    {
        int s=0, vetor[]={2,4,6,5,8};
        int r;
        //entrada de dados
        //processamento
        soma(vetor);
        r = produto(vetor);
        JOptionPane.showMessageDialog(null, "O produto eh: " + r);
        System.exit(0);
    }
}
