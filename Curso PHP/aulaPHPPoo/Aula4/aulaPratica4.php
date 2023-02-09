<pre>
<?php
require_once "Caneta.php";

$c1 = new Caneta("BIC","Azul",0.5);
$c2 = new Caneta("Pencil", "Vermelha", 1.0);

print_r($c1);
print_r($c2);

//echo "Eu tenho uma caneta {$c1->getModelo()} de ponta {$c1->getPonta()}.";
?>
</pre>