<?php
class Quarto {
    var $temperatura;
    var $ventilador;
    var $janela;

   function VentiladorOn() {
    if ($this->temperatura >= 23){
        echo "Liguei o ventilador<br>";
   } else {
    echo "Desligando o ventilador<br>";
   } 
}
   function WindowOpen() {
    if ($this->temperatura >= 23 && $this->janela == false){
        echo "Abrindo a janela<br>";
   } else {
        echo "Fechando a janela<br>";
   }
   }
}
?>