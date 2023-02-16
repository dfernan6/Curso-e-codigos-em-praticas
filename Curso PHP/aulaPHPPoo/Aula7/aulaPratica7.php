<pre>
<?php
 require_once "lutador.php";
 $c = New lutador("Lima", "brasileiro",
35, 1.75, 80 , 0, 15, 2, 2);
$c->setCategoria(0);
$c->ganharLuta(0);
$c->perderLuta(0);
$c->empatarLuta(0);
$c->apresentar();

?>
</pre>