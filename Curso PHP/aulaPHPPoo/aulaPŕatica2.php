<?php
 require_once "Caneta.php";
 $c1 = new Caneta;
 $c1 ->cor = "Azul";
 $c1 ->ponta = 0.5;
 $c1 ->tampar();
print_r($c1);

echo "<br>";

  $c2 = new Caneta;
  $c2 ->cor = "Verde";
  $c2 ->ponta = 50;
  $c2 ->tampar();
print_r($c2);

?>