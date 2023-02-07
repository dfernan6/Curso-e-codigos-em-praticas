<?php
 require_once "Quarto.php";
 $c1 = New Quarto;
 $c1->temperatura = 20;
 $c1->ventilador = true;
 $c1->janela = false;
 $c1->VentiladorOn();
 $c1->WindowOpen();

 echo "<br>";
 print_r($c1);
?>