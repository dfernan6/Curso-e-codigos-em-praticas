<pre>
<?php
 require_once "Quarto.php";
 $c1 = New Quarto();
 $c1->setCor("Amarelo");
 $c1->setTemperatura(23);
 $c1->VentiladorOn();
 $c1->WindowOpen();

 print_r($c1);
?>
</pre>