<?php
 require_once "Caneta.php";
 $c1 = new Caneta;
 $c1->cor = "Azul";
 $c1->ponta = 0.5;
 $c1->destampar();
 $c1->rabiscar();
  print_r($c1);

?>