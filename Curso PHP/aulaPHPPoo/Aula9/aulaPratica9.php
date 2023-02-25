<pre>
<?php
require_once "pessoa.php";
require_once "livro.php";

$p1 = New pessoa("Danyela", 22, "Feminino");
$p1->fazerAniver();
print_r($p1);

$l1 = New livro("a", "b", "c", "d", "e", "f");
$l1->detalhes();


echo "<br>";
print_r($l1);

?>
</pre>